import { useEffect, useState } from "react";
import { ProductList } from "../components/product/product-list";
import { getAllProducts } from "../apis/products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  return <ProductList products={products} />;
};

export default Home;
