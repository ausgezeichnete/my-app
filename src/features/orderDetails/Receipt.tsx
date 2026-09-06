type ReceiptItem = {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

type ReceiptData = {
  number: string;
  date: string;

  seller: {
    name: string;
    email: string;
    phone: string;
  };

  items: ReceiptItem[];

  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  currency: string;
};

type ReceiptProps = {
  receipt: ReceiptData;
};

export const Receipt = ({ receipt }: ReceiptProps) => {
  return (
    <div
      id="order-receipt"
      className="w-[385px] rounded-xl bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">Receipt</h2>

          <p className="mt-1 text-sm text-muted-foreground">{receipt.date}</p>
        </div>

        <span className="text-sm font-medium">{receipt.number}</span>
      </div>

      {/* Seller */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-primary">
          {receipt.seller.name}
        </h3>

        <div className="mt-2 text-xs text-muted-foreground">
          <p>{receipt.seller.email}</p>
          <p>{receipt.seller.phone}</p>
        </div>
      </div>

      {/* Items */}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-3 py-2 text-left font-semibold">Item</th>

            <th className="px-3 py-2 text-center font-semibold">Qty</th>

            <th className="px-3 py-2 text-right font-semibold">Price</th>
          </tr>
        </thead>

        <tbody>
          {receipt.items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-3 py-2">{item.name}</td>

              <td className="px-3 py-2 text-center">{item.quantity}</td>

              <td className="px-3 py-2 text-right">
                {item.total} {receipt.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            {receipt.subtotal} {receipt.currency}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {receipt.shipping} {receipt.currency}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>
            {receipt.tax} {receipt.currency}
          </span>
        </div>

        <div className="flex justify-between text-success">
          <span>Discount</span>
          <span>
            -{receipt.discount} {receipt.currency}
          </span>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between font-bold">
            <span>Total</span>

            <span>
              {receipt.total} {receipt.currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
