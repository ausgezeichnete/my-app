type OrderProductData = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  currency: string;
};

type OrderProductProps = {
  product: OrderProductData;
};

export const OrderProduct = ({ product }: OrderProductProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
      <div className="flex min-w-0 items-center gap-4 ">
        <img
          src={product.image}
          alt={product.name}
          className="h-23.25 w-19.75 shrink-0 rounded-lg object-cover"
        />

        <div className="min-w-0">
          <p className=" font-bold text-primary text-[10px]  ">
            {product.name}-{product.color}
          </p>

          <p className=" text-[12px]  border text-center border-border px-1.25 py-0.75 gap-2.5 rounded-[8px]  mt-2">
            <span className="mr-2"> Quantity: {product.quantity}</span>
            <span className="mr-2">Size: {product.size}</span>
          </p>

          <p className="shrink-0 font-semibold mb-1 mt-1 text-secondary">
            {product.price} {product.currency}
          </p>
          <p className="font-bold text-[8px] text-dark-grey">
            +10 euro shipping
          </p>
        </div>
      </div>
    </div>
  );
};
