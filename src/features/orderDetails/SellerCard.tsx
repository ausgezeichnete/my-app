import { Star } from "lucide-react";

type Seller = {
  id: number;
  name: string;
  image: string;
  rating: number;
};

type SellerCardProps = {
  seller: Seller;
};

export const SellerCard = ({ seller }: SellerCardProps) => {
  return (
    <div className="flex items-center justify-end rounded-xl bg-white p-5 shadow-sm">
      <div className="text-right">
        <p className="text-xs text-muted-foreground">Seller</p>
        <p className="font-semibold">{seller.name}</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= seller.rating
                  ? "fill-highlight stroke-highlight"
                  : "fill-transparent stroke-dark-grey"
              }`}
            />
          ))}
        </div>
      </div>

      <img
        src={seller.image}
        alt={seller.name}
        className="ml-4 h-16 w-16 rounded-full object-cover"
      />
    </div>
  );
};
