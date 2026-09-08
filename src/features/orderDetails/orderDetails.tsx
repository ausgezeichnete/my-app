import ORDERS_MOCK_DATA from "./REPORTS_MOCK_DATA.json";
import { Receipt } from "./Receipt";
import { OrderProduct } from "./OrderProduct";
import { OrderTimeline } from "./OrderTimeline";
import { SellerCard } from "./SellerCard";
import { useEntityFromParams } from "@/hooks/useEntityFromParams";

export const OrderDetails = () => {
  const { entity: order } = useEntityFromParams(ORDERS_MOCK_DATA, "id");

  if (!order) {
    return (
      <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center gap-4">
        <h2 className="page-header">Order not found</h2>
        <button
          type="button"
          className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        <h2>Order #{order.orderNumber}</h2>
        <button
          type="button"
          className=" hover:text-foreground cursor-pointer mr-2"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-[385px_minmax(0,1fr)] gap-6">
        <aside>
          <Receipt receipt={order.receipt} />
        </aside>

        <section className="min-w-0 space-y-6">
          <OrderProduct product={order.product} />
          <OrderTimeline items={order.timeline} />
          <SellerCard seller={order.seller} />
        </section>
      </div>
    </div>
  );
};
