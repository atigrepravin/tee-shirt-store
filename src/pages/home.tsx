import { useEffect, useState } from "react";
import { ProductList } from "../components/product/product-list";
import { getAllProducts } from "../apis/products";
import { Search } from "../components/form/search";
import { Product } from "../components/product/product-card";

const Home = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const searchProducts = (data: Product[]) => {
    const searchParams = ["name", "type", "color"];

    return data.filter((product) => {
      return searchParams.some((param) => {
        return product[param as keyof Product]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLocaleLowerCase());
      });
    });
  };

  return (
    <div>
      <div className="max-w-md mx-auto mb-8">
        <Search
          onChange={(e: any) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
      <ProductList products={searchProducts(products)} />
    </div>
  );
};

export default Home;
