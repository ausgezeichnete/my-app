// hooks/useDownloadReceipt.ts
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type PdfFormat = "a4" | "letter";
type PdfOrientation = "portrait" | "landscape";

export interface DownloadReceiptOptions {
  fileName?: string;
  format?: PdfFormat;
  orientation?: PdfOrientation;
  /** Margin in mm applied to all sides of the PDF page */
  margin?: number;
  /** Canvas render scale — higher = sharper but larger file. 2-3 is usually enough. */
  scale?: number;
  /**
   * Class added to the target element right before capture and removed
   * right after. Define this class in your CSS to control exactly how
   * the downloaded page looks — independent of the live on-screen styles
   * (e.g. hide buttons, force white background, fixed print-friendly width,
   * simpler fonts). This is the main lever for "professional PDF styling".
   */
  printClassName?: string;
}

interface DownloadReceiptResult {
  downloadReceipt: (
    elementId: string,
    options?: DownloadReceiptOptions,
  ) => Promise<void>;
  isDownloading: boolean;
  error: string | null;
}

const PAGE_SIZES_MM: Record<PdfFormat, { width: number; height: number }> = {
  a4: { width: 210, height: 297 },
  letter: { width: 215.9, height: 279.4 },
};

export const useDownloadReceipt = (): DownloadReceiptResult => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const downloadReceipt = async (
    elementId: string,
    options: DownloadReceiptOptions = {},
  ) => {
    const {
      fileName = "receipt.pdf",
      format = "a4",
      orientation = "portrait",
      margin = 10,
      scale = 2,
      printClassName,
    } = options;

    const element = document.getElementById(elementId);

    if (!element) {
      setError("Receipt element not found.");
      return;
    }

    setIsDownloading(true);
    setError(null);

    // Swap in print-only styling for the duration of the capture, so the
    // exported PDF can look completely different from the live page.
    if (printClassName) element.classList.add(printClassName);

    try {
      const canvas = await html2canvas(element, {
        scale,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const { width: pageWidthMm, height: pageHeightMm } =
        orientation === "portrait"
          ? PAGE_SIZES_MM[format]
          : {
              width: PAGE_SIZES_MM[format].height,
              height: PAGE_SIZES_MM[format].width,
            };

      const contentWidthMm = pageWidthMm - margin * 2;
      const contentHeightMm = pageHeightMm - margin * 2;

      // Convert the full canvas to mm at the target width, then figure out
      // how many page-heights it spans so nothing gets cut off or squished.
      const imgWidthMm = contentWidthMm;
      const imgHeightMm = (canvas.height * imgWidthMm) / canvas.width;

      const pdf = new jsPDF({ orientation, unit: "mm", format });

      if (imgHeightMm <= contentHeightMm) {
        // Fits on a single page
        const imageData = canvas.toDataURL("image/png");
        pdf.addImage(imageData, "PNG", margin, margin, imgWidthMm, imgHeightMm);
      } else {
        // Slice the canvas into page-sized chunks and add one page per chunk
        const pageCanvasHeightPx =
          (contentHeightMm * canvas.width) / imgWidthMm;
        let renderedHeightPx = 0;
        let pageIndex = 0;

        while (renderedHeightPx < canvas.height) {
          const sliceHeightPx = Math.min(
            pageCanvasHeightPx,
            canvas.height - renderedHeightPx,
          );

          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = canvas.width;
          pageCanvas.height = sliceHeightPx;

          const ctx = pageCanvas.getContext("2d");
          if (!ctx) throw new Error("Could not create canvas context");

          ctx.drawImage(
            canvas,
            0,
            renderedHeightPx,
            canvas.width,
            sliceHeightPx,
            0,
            0,
            canvas.width,
            sliceHeightPx,
          );

          const sliceImageData = pageCanvas.toDataURL("image/png");
          const sliceHeightMm = (sliceHeightPx * imgWidthMm) / canvas.width;

          if (pageIndex > 0) pdf.addPage();
          pdf.addImage(
            sliceImageData,
            "PNG",
            margin,
            margin,
            imgWidthMm,
            sliceHeightMm,
          );

          renderedHeightPx += sliceHeightPx;
          pageIndex += 1;
        }
      }

      pdf.save(fileName);
    } catch (err) {
      console.error("Failed to download receipt:", err);
      setError("Something went wrong while generating the PDF.");
    } finally {
      if (printClassName) element.classList.remove(printClassName);
      setIsDownloading(false);
    }
  };

  return { downloadReceipt, isDownloading, error };
};
