import { AppButton } from "@/common/appButton/appButton";
import { useDownloadReceipt } from "@/hooks/useDownloadReceipt";
import LogoImg from "@/assets/logo-teal-text.svg";

type ReceiptItem = {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

type ReceiptCustomer = {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
};

type ReceiptData = {
  invoiceNumber: string;
  issueDate: string;
  status: string;
  orderLocation: string;

  customer: ReceiptCustomer;

  items: ReceiptItem[];

  discount: number;
  shipping: number;
  subtotal: number;
  taxTotal: number;
  invoiceTotal: number;
  amountPaid: number;
  currency: string;
};

type ReceiptProps = {
  receipt: ReceiptData;
};

const Money = ({ amount, currency }: { amount: number; currency: string }) => (
  <span className="tabular-nums">
    {amount.toFixed(3)} {currency}
  </span>
);

export const Receipt = ({ receipt }: ReceiptProps) => {
  const { downloadReceipt, isDownloading, error } = useDownloadReceipt();

  return (
    <div
      id="order-receipt"
      className="rounded-xl bg-white p-8 shadow-sm text-muted-foreground"
    >
      {/* Header */}
      <div className="mb-1">
        <div className="flex justify-end">
          <img src={LogoImg} alt="Logo" className="w-[165px] h-[68.17px]" />
        </div>
        <h2 className="text-center">Invoice</h2>
      </div>

      {/*invoice */}
      <div className="mb-8">
        <p className="mb-3 text-base font-bold">Invoice Details</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4  text-[10px]">
          <div className="flex min-w-0 gap-2">
            <span className="shrink-0 font-bold text-foreground">
              Invoice Number
            </span>
            <span className="min-w-0 text-muted-foreground">
              #{receipt.invoiceNumber}
            </span>
          </div>

          <div className="flex min-w-0 gap-1  text-[10px]">
            <span className="shrink-0 font-bold text-foreground">
              Order Location
            </span>
            <span className="min-w-0 text-muted-foreground">
              {receipt.orderLocation}
            </span>
          </div>

          <div className="flex min-w-0 gap-1  text-[10px]">
            <span className="shrink-0 font-bold text-foreground">
              Issue Date
            </span>
            <span className="min-w-0 text-muted-foreground">
              {receipt.issueDate}
            </span>
          </div>

          <div className="flex min-w-0 gap-1  text-[10px]">
            <span className="shrink-0 font-bold text-foreground">
              Invoice Status
            </span>
            <span className="min-w-0 text-muted-foreground">
              {receipt.status}
            </span>
          </div>
        </div>
      </div>
      {/* Customer details */}
      <div className="mb-8">
        <p className="mb-3 text-base font-bold">Customer Details</p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1  text-[10px]">
            <span className="font-bold text-foreground">Customer Name</span>
            <span>{receipt.customer.name}</span>
          </div>

          <div className="flex flex-col gap-1 text-[10px]">
            <span className="font-bold text-foreground">Mobile Number</span>
            <span>{receipt.customer.phone}</span>
          </div>

          <div className="flex flex-col gap-1 text-[10px]">
            <span className="font-bold text-foreground">Email</span>
            <span>{receipt.customer.email}</span>
          </div>

          <div className="flex flex-col gap-1 text-[10px] ">
            <span className="font-bold text-foreground">Address</span>
            <span className="min-w-0">{receipt.customer.address}</span>
          </div>

          <div className="flex flex-col gap-1 text-[10px]">
            <span className="font-bold text-foreground">Notes</span>
            <span>{receipt.customer.notes}</span>
          </div>
        </div>
      </div>

      {/* Items */}
      <table className="w-full">
        <thead>
          <tr className=" bg-[#D9D9D9] text-[12px]">
            <th className="px-3 py-3 text-left">Product</th>
            <th className="px-3 py-3 text-center ">Qty</th>
            <th className="px-3 py-3 text-right">Price</th>
            <th className="px-3 py-3 text-right">Total</th>
          </tr>
        </thead>

        <tbody className="border-b">
          {receipt.items.map((item) => (
            <tr key={item.id} className=" text-[12px]">
              <td className="px-3 py-3">{item.name}</td>
              <td className="px-3 py-3 text-center">{item.quantity}</td>
              <td className="px-3 py-3 text-right">
                <Money amount={item.unitPrice} currency={receipt.currency} />
              </td>
              <td className="px-3 py-3 text-right">
                <Money amount={item.total} currency={receipt.currency} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="px-3 py-3">
        <div className="w-full text-[12px] ">
          <div className="flex justify-between">
            <span className="font-bold">Discount</span>
            <span className="text-success">
              -<Money amount={receipt.discount} currency={receipt.currency} />
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Shipping</span>
            <Money amount={receipt.shipping} currency={receipt.currency} />
          </div>

          <div className=" pt-3">
            <div className="flex justify-between">
              <span className="font-bold">Subtotal</span>
              <Money amount={receipt.subtotal} currency={receipt.currency} />
            </div>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Total Tax</span>
            <Money amount={receipt.taxTotal} currency={receipt.currency} />
          </div>

          <div className="flex justify-between">
            <span className="font-bold"> Invoice Total</span>
            <Money amount={receipt.invoiceTotal} currency={receipt.currency} />
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Amount Paid</span>
            <Money amount={receipt.amountPaid} currency={receipt.currency} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="receipt-actions mt-8 flex justify-center gap-3">
        <AppButton
          buttonText={isDownloading ? "Preparing…" : "Download"}
          variant="contained"
          width="medium"
          disabled={isDownloading}
          onClick={() =>
            downloadReceipt("order-receipt", {
              fileName: `receipt-${receipt.invoiceNumber}.pdf`,
              printClassName: "receipt-print-mode",
              margin: 12,
              scale: 3,
            })
          }
        />
        <AppButton
          buttonText="Print"
          variant="contained"
          width="medium"
          color="secondary"
          onClick={() => window.print()}
        />
      </div>
      {error && (
        <p className="mt-2 text-center text-[10px] text-error">{error}</p>
      )}
    </div>
  );
};
