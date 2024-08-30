import { useEffect, useState } from "react";
import { ProductList } from "../components/product/product-list";
import { getAllProducts } from "../apis/products";
import { Search } from "../components/form/search";
import { Product } from "../components/product/product-card";
import useSearch from "../components/hooks/useSearch";
import { ProductFilter } from "../components/product/product-filter";
import {
  PRODUCT_FILTER_ATTRIBUTES,
  PRODUCT_FILTER_DEFAULT_FORM_VALUE,
} from "../constants/product";
import useFilter from "../components/hooks/useFilter";
import useRangeFilter from "../components/hooks/useRangeFilter";

const Home = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState<any>(
    PRODUCT_FILTER_DEFAULT_FORM_VALUE
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<any[]>([]);

  const searchParams = ["name", "type", "color"];
  const searchedProducts = useSearch(searchQuery, searchParams, products);
  const typeFilteredProducts = useFilter(formData, searchedProducts);
  const filteredProducts = useRangeFilter(
    selectedPriceRanges,
    typeFilteredProducts as Product[]
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.dataset.groupName;
    if (!key) return;
    const { value, checked } = e.target;
    let attributeValues: string[] = [];
    if (checked) {
      attributeValues = [...formData[key as keyof object], value];
    } else {
      attributeValues = [...formData[key as keyof object]].filter(
        (item) => item !== value
      );
    }
    setFormData({ ...formData, [key]: attributeValues });
  };

  const handlePriceRangeChange = (isChecked: boolean, option: any) => {
    let newSelectedPriceRanges;
    if (isChecked) {
      newSelectedPriceRanges = [...selectedPriceRanges, option];
    } else {
      newSelectedPriceRanges = selectedPriceRanges.filter(
        (item) => item.label !== option.label
      );
    }
    setSelectedPriceRanges(newSelectedPriceRanges);
  };

  return (
    <div className="flex gap-8">
      <div className="w-80 mt-20">
        <ProductFilter
          handleFilterChange={handleFilterChange}
          handlePriceRangeChange={handlePriceRangeChange}
          filterAttributes={PRODUCT_FILTER_ATTRIBUTES}
        />
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
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;
