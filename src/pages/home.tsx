import { useEffect, useState } from "react";
import { ProductList } from "../components/product/product-list";
import { getAllProducts } from "../apis/products";
import { Search } from "../components/form/search";
import { Product } from "../components/product/product-card";
import useSearch from "../components/hooks/useSearch";
import { ProductFilter } from "../components/product/product-filter";

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
    <div className="flex gap-8">
      <div className="w-80 mt-20">
        <ProductFilter />
      </div>
      <div className="grow">
        <div className="max-w-lg mx-auto mb-6">
          <Search
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            value={searchQuery}
          />
        </div>
        <ProductList products={searchedProducts} />
      </div>
    </div>
  );
};

export default Home;
