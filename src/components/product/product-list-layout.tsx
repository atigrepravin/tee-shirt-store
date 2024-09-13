import { useEffect, useState } from "react";
import { ProductList } from "./product-list";
import { getAllProducts } from "../../apis/products";
import { Search } from "../form/search";
import { ProductFilter } from "./product-filter";
import {
  PRODUCT_FILTER_ATTRIBUTES,
  PRODUCT_FILTER_DEFAULT_FORM_VALUE,
} from "../../utils/product";
import useFilter from "../hooks/use-filter";
import useRangeFilter from "../hooks/use-range-filter";
import { PriceOption, Product } from "../../types";
import useSearch from "../hooks/use-search";

export const ProudctListLayout = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterFormData, setFilterFormData] = useState<any>(
    PRODUCT_FILTER_DEFAULT_FORM_VALUE
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<any[]>([]);
  console.log("test------selectedPriceRanges", selectedPriceRanges);
  const searchParams = ["name", "type", "color"];
  const searchedProducts = useSearch(searchQuery, searchParams, products);
  const filteredProductsBylabel = useFilter(filterFormData, searchedProducts);
  const filteredProducts = useRangeFilter(
    selectedPriceRanges,
    filteredProductsBylabel as Product[]
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
      attributeValues = [...filterFormData[key as keyof object], value];
    } else {
      attributeValues = [...filterFormData[key as keyof object]].filter(
        (item) => item !== value
      );
    }
    setFilterFormData({ ...filterFormData, [key]: attributeValues });
  };

  const handlePriceRangeChange = (isChecked: boolean, option: PriceOption) => {
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
