import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type LayoutTitleProps = {
  title?: string;
  img?: string;
  onBackClick?: () => void;
};
export const LayoutTitle = ({ title, img, onBackClick }: LayoutTitleProps) => {
  //   const { t } = useTranslation;
  //   const isDE = i18n.language === "de";

  const navigate = useNavigate();

  const handleBackCLick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        {img && (
          <img
            src={img}
            className="w-3 h-3 rounded-full shadow-2xl"
            alt={img}
          />
        )}
        <h1 className="font-light text-2xl text-nowrap">{title}</h1>
      </div>
      <button
        className="flex items-center gap-3 cursor-pointer"
        onClick={handleBackCLick}
      >
        <span className="text-xs font-medium">Back</span>
        <span>
          <ChevronLeft color="#292D32" />
        </span>
      </button>
    </div>
  );
};
