import { Product, ProductCard } from "./product-card";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
