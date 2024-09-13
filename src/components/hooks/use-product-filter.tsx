import { FilterFormData, PriceOption, Product } from "../../types";

interface useProductFilterProps {
  products: Product[];
  searchQuery: string;
  searchParams: string[];
  filterFormData: FilterFormData;
  selectedPriceRanges: PriceOption[];
}
export const useProductFilter = ({
  products,
  searchQuery,
  searchParams,
  filterFormData,
  selectedPriceRanges,
}: useProductFilterProps) => {
  return null;
};
