import { useEffect, useState } from "react";
import { AttributeOption, Product } from "../../types";

function useRangeFilter(
  selectedPriceRanges: AttributeOption[],
  data: Product[]
) {
  const [result, setResult] = useState<any[]>(data);

  useEffect(() => {
    if (selectedPriceRanges.length) {
      const filteredData = data.filter((item) => {
        return selectedPriceRanges.some((range) => {
          if (range.min && range.max) {
            const price = item.price;
            return price >= range.min && price <= range.max;
          }
        });
      });
      setResult(filteredData);
    } else {
      setResult(data);
    }
  }, [data, selectedPriceRanges]);

  return result;
}

export default useRangeFilter;
