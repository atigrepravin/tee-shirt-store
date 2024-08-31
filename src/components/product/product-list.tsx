import { Product } from "../../types";
import { ProductCard } from "./product-card";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
