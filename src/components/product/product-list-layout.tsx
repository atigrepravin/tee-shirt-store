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
import { AttributeOption, Product, ProductFilterAtributes } from "../../types";
import useSearch from "../hooks/use-search";
import { FilterIcon } from "../icons/filter";
import cn from "classnames";

export const ProudctListLayout = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterFormData, setFilterFormData] = useState<any>(
    PRODUCT_FILTER_DEFAULT_FORM_VALUE
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<any[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
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

  useEffect(() => {
    if (isFilterVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFilterVisible]);

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

  const handlePriceRangeChange = (
    isChecked: boolean,
    option: AttributeOption
  ) => {
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
      <div
        className={cn(
          "md:w-60 z-50 bg-white md:z-auto md:mt-20 w-full h-full md:h-auto transition-transform left-0 top-0 -translate-x-full md:translate-x-0 overflow-auto fixed md:static p-8 md:p-0",
          {
            "translate-x-0": isFilterVisible,
          }
        )}
      >
        <button
          className="md:hidden absolute right-2 top-2 py-4 px-6 bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsFilterVisible(false)}
        >
          Close
        </button>
        <ProductFilter
          handleFilterChange={handleFilterChange}
          handlePriceRangeChange={handlePriceRangeChange}
          filterAttributes={
            PRODUCT_FILTER_ATTRIBUTES as ProductFilterAtributes[]
          }
        />
      </div>
      <div className="grow">
        <div className="max-w-lg mx-auto mb-6 flex items-center">
          <Search
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            value={searchQuery}
          />
          <div className="ml-6 md:hidden">
            <button onClick={() => setIsFilterVisible(true)}>
              <FilterIcon />
            </button>
          </div>
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};
