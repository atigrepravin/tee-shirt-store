import { useEffect, useState } from "react";

function useFilter<DataType>(filterQuery: any, data: DataType[]): DataType[] {
  const [result, setResult] = useState<DataType[]>(data);

  useEffect(() => {
    const filteredData = data.filter((item: DataType) => {
      let searchParams = Object.keys(filterQuery).filter(
        (param) => filterQuery[param].length
      );
      return searchParams.every((param) =>
        filterQuery[param as keyof object].includes(
          (item[param as keyof DataType] as string).toLowerCase()
        )
      );
    });
    setResult(filteredData);
  }, [data, filterQuery]);

  return result;
}

export default useFilter;
