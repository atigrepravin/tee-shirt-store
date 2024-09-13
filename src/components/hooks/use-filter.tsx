import { useEffect, useState } from "react";
import { FilterFormData, Product } from "../../types";

function useFilter(filterQuery: FilterFormData, data: Product[]) {
  const [result, setResult] = useState(data);
  useEffect(() => {
    const filteredData = data.filter((item) => {
      let searchParams = Object.keys(filterQuery).filter(
        (param) => filterQuery[param as keyof FilterFormData].length
      );
      return searchParams.every((param) =>
        filterQuery[param as keyof FilterFormData].includes(
          (item[param as keyof Product] as string).toLowerCase()
        )
      );
    });
    setResult(filteredData);
  }, [data, filterQuery]);

  return result;
}

export default useFilter;
