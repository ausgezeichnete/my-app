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

        <h3 className="font-semibold">{seller.name}</h3>

        <div className="mt-1 text-warning">★★★★★</div>
      </div>

      <img
        src={seller.image}
        alt={seller.name}
        className="ml-4 h-16 w-16 rounded-full object-cover"
      />
    </div>
  );
};
