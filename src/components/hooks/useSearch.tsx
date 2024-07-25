import { useEffect, useState } from "react";

function useSearch<DataType>(
  query: string,
  searchParams: string[],
  data: DataType[]
): DataType[] {
  const [result, setResult] = useState<DataType[]>([]);

  useEffect(() => {
    const filteredData: DataType[] = data.filter((item: DataType) => {
      return searchParams.some((param) => {
        const value = item[param as keyof DataType] as string;
        return value.toLowerCase().includes(query.toLocaleLowerCase());
      });
    });
    setResult(filteredData);
  }, [query, data]);

  return result;
}

export default useSearch;
