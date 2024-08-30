import { useEffect, useState } from "react";

function useRangeFilter(selectedPriceRanges: any, data: any[]): any[] {
  const [result, setResult] = useState<any[]>(data);

  useEffect(() => {
    if (selectedPriceRanges.length) {
      const filteredData = data.filter((item: any) => {
        return selectedPriceRanges.some((range: any) => {
          const price = item.price;
          return price >= range.min && price <= range.max;
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
