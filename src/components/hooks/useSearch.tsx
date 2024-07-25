import { useEffect, useState } from "react";

function useSearch<DataType>(
  query: string,
  searchParams: string[],
  data: DataType
): DataType {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item: any) => {
      return searchParams.some((param) => {
        return item[param]
          .toString()
          .toLowerCase()
          .includes(query.toLocaleLowerCase());
      });
    });
    setResult(filteredData);
  }, [query, data]);

  return result;
}

export default useSearch;
