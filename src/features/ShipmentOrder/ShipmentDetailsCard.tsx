import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { ShipmentDetailsCardProps } from "./ShipmentDetailsCard.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppButton } from "@/common/appButton/appButton";
import { Package, Phone, PhoneCall, PhoneIcon, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/common/appSection/appSection";
import { LocationSection } from "./LocationSection";
import { Button } from "@/components/ui/button";

export default function ShipmentDetailsCard({
  sender = { name: "Unknown sender", avatarUrl: "" },
  pickup = {
    label: "Pickup location",
    city: "",
    address: "",
    time: "",
    date: "",
    phone: "",
  },
  dropoff = {
    label: "Drop-off location",
    city: "",
    address: "",
    time: "",
    date: "",
    phone: "",
  },
  shipmentType = "",
  shipmentDescription = "",
  dimensions = { weight: "—", length: "—", width: "—" },
  photos = [],
  vehicleType = "",
  price = 0,
  currencySymbol = "€",
  onShowMap = () => {},
  onCall = () => {},
}: Partial<ShipmentDetailsCardProps>) {
  return (
    <Card className="mx-auto flex flex-col overflow-y-auto p-0 w-auto shadow-none">
      <CardHeader className="flex flex-row items-center justify-between p-2 bg-[#F2FBFB]">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11">
            <AvatarImage src={sender.avatarUrl} alt={sender.name} />
            <AvatarFallback>
              {sender.name.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="font-semibold text-slate-800">{sender.name}</span>
        </div>
        <Button onClick={onCall} className="bg-white">
          Contact <Phone />
        </Button>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-0 border-0 shadow-none">
        <div className="bg-white">
          <LocationSection data={pickup} onShowMap={onShowMap} />
        </div>
        <div className="bg-white">
          <LocationSection data={dropoff} onShowMap={onShowMap} />
        </div>
        <div className="bg-white p-2 items-center">
          <Section
            title="Shipment type"
            TitleStyle="text-secondary"
            className=" flex justify-between "
          >
            <Badge
              variant="outline"
              className="border-secondary font-bold rounded-[5px] text-secondary"
            >
              {shipmentType}
            </Badge>
          </Section>
        </div>
        <div className="bg-white p-2">
          <Section>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Package size={16} className="mt-0.5 shrink-0 text-slate-400" />
              <p>{shipmentDescription}</p>
            </div>
          </Section>
        </div>

        <div className="flex flex-wrap gap-2 bg-white p-2">
          <Badge
            variant="outline"
            className="border-secondary font-bold rounded-[5px]"
          >
            <span className="text-secondary">Weight</span> {dimensions.weight}
          </Badge>
          <Badge
            variant="outline"
            className="border-secondary font-bold rounded-[5px]"
          >
            <span className="text-secondary">Length</span> {dimensions.length}
          </Badge>
          <Badge
            variant="outline"
            className="border-secondary font-bold rounded-[5px]"
          >
            <span className="text-secondary">Width</span> {dimensions.width}
          </Badge>
        </div>
        <div className="bg-white p-2">
          <Section title="Shipment photos">
            <div className="flex gap-3">
              {photos.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Shipment photo ${i + 1}`}
                  className="h-20 w-20 rounded-lg border border-slate-200 object-cover"
                />
              ))}
            </div>
          </Section>
        </div>
        <div className="bg-white p-2">
          <Section title="Requested vehicle type" className="bg-white p-2">
            <div className="flex w-24 flex-col items-center gap-1 rounded-xl border border-slate-200 py-3">
              <Truck size={26} className="text-sky-500" />
              <span className="text-xs">{vehicleType}</span>
            </div>
          </Section>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-2 bg-white border-0">
        <span className="text-sm font-medium ">Shipment price</span>
        <span className="text-lg font-bold">
          {price} {currencySymbol}
        </span>
      </CardFooter>
    </Card>
  );
}
