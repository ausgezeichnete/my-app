import ORDERS_MOCK_DATA from "./REPORTS_MOCK_DATA.json";
import { Receipt } from "./Receipt";
import { OrderProduct } from "./OrderProduct";
import { OrderTimeline } from "./OrderTimeline";
import { SellerCard } from "./SellerCard";
import { AppButton } from "@/common/appButton/appButton";
export const OrderDetails = () => {
  const order = ORDERS_MOCK_DATA[0];
  console.log("ORDERS:", ORDERS_MOCK_DATA);
  console.log("ORDER:", order);
  return (
    <main className="min-h-screen bg-background p-8">
      {" "}
      {/* Header */}{" "}
      <header className="mb-8 flex items-center justify-between">
        {" "}
        <h2 className="page-header">Order #{order.orderNumber}</h2>{" "}
        <button
          type="button"
          className=" text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => window.history.back()}
        >
          {" "}
          Back{" "}
        </button>{" "}
      </header>{" "}
      {/* Main Content */}{" "}
      <div className="grid grid-cols-[385px_minmax(0,1fr)] gap-6">
        {" "}
        {/* Receipt */}{" "}
        <aside>
          {" "}
          <Receipt receipt={order.receipt} /> {/* Receipt Actions */}{" "}
          <div className="mt-4 flex gap-3 justify-center">
            {" "}
            <AppButton
              buttonText="Download"
              variant="contained"
              width="medium"
            />{" "}
            <AppButton
              buttonText="Print"
              variant="contained"
              width="medium"
              color="secondary"
            />{" "}
          </div>{" "}
        </aside>{" "}
        {/* Order Details */}{" "}
        <section className="min-w-0 space-y-6">
          {" "}
          <OrderProduct product={order.product} />{" "}
          <OrderTimeline items={order.timeline} />{" "}
          <SellerCard seller={order.seller} />{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
};
