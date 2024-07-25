import { SearchIcon } from "../icons/search-icon";

export const Search = ({ onChange, value }: any) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon className="w-6 h-6 text-gray-500" />
      </div>
      <input
        onChange={onChange}
        type="search"
        className="block w-full p-4 ps-10 text-sm focus:outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        placeholder="Search for products"
        value={value}
      />
    </div>
  );
};
