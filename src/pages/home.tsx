import { useEffect, useState } from "react";
import { ProductList } from "../components/product/product-list";
import { getAllProducts } from "../apis/products";
import { Search } from "../components/form/search";
import { Product } from "../components/product/product-card";
import useSearch from "../components/hooks/useSearch";

const Home = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = ["name", "type", "color"];
  const searchedProducts = useSearch(searchQuery, searchParams, products);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="max-w-md mx-auto mb-8">
        <Search
          onChange={(e: any) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
      <ProductList products={searchedProducts} />
    </div>
  );
};

export default Home;
