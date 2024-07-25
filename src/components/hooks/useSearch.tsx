import { useEffect, useState } from "react";

const useSearch = (query: string, searchParams: string[], data: any) => {
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
};

export default useSearch;
