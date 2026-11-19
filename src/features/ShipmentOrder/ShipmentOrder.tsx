import { useEntityFromParams } from "@/hooks/useEntityFromParams";
import ShipmentDetailsCard from "./ShipmentDetailsCard";
import type { ShipmentDetailsCardProps } from "./ShipmentDetailsCard.types";
import SHIPMENT_ORDERS_MOCKDATA from "./SHIPMENT_ORDERS_MOCKDATA.json";
import { mockReceipt } from "./mockReceipt";
import { ShipmentReceipt } from "./ShipmentReceipt";

export const ShipmentOrder = () => {
  const { id: shipmentId, entity: shipment } =
    useEntityFromParams<ShipmentDetailsCardProps>(
      SHIPMENT_ORDERS_MOCKDATA as ShipmentDetailsCardProps[],
      "shipmentId",
    );

  if (!shipment) return <p>Shipment not found</p>;

  return (
    <div className="min-h-screen bg-background p-8 space-y-6 ">
      <div className="flex justify-between">
        <h2>Shipment Order # </h2>
        <button
          type="button"
          className=" hover:text-foreground cursor-pointer mr-2"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[433px_minmax(0,1fr)] gap-6">
        <aside className="lg:order-1 order-2 ">
          <ShipmentReceipt receipt={mockReceipt} />{" "}
        </aside>

        <section className="min-w-0 space-y-6 lg:order-2 order-1 border-0">
          <ShipmentDetailsCard {...shipment} />
        </section>
      </div>
    </div>
  );
};
