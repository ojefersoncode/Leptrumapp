type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  price: number;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border max-md:border-slate-200 md:border-slate-300 rounded-2xl shadow-sm overflow-hidden bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-58 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-950">{product.name}</h3>
        <p className="text-sm text-muted-foreground text-slate-800">
          {product.category} - {product.gender}
        </p>
        <p className="text-primary font-bold mt-2">
          R$ {product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
