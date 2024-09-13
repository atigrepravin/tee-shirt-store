import { Product } from "../types";

export const PRODUCT_FILTER_ATTRIBUTES = [
  {
    name: "color",
    displayName: "Colour",
    options: [
      { label: "Red", value: "red" },
      { label: "Black", value: "black" },
      { label: "Green", value: "green" },
    ],
  },
  {
    name: "gender",
    displayName: "Gender",
    options: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  },
  {
    name: "type",
    displayName: "Type",
    options: [
      { label: "Polo", value: "polo" },
      { label: "Hoodie", value: "hoodie" },
      { label: "Basic", value: "basic" },
    ],
  },
  {
    name: "price",
    displayName: "Price Range",
    filterType: "range",
    options: [
      { label: "Under 250", min: 0, max: 250 },
      { label: "₹250 to 450", min: 250, max: 450 },
      { label: "₹450 and above", min: 450, max: Infinity },
    ],
  },
];

export const PRODUCT_FILTER_DEFAULT_FORM_VALUE =
  PRODUCT_FILTER_ATTRIBUTES.reduce((a, b) => ({ ...a, [b.name]: [] }), {});

export const getSearchedProducts = (
  products: Product[],
  query: string,
  searchParams: string[]
) => {
  return products.filter((product) => {
    return searchParams.some((param) => {
      const value = product[param as keyof Product] as string;
      return value.toLowerCase().includes(query.toLocaleLowerCase());
    });
  });
};

// const getProductsByLabel = (products: Product[], filterQuery: Array[]) => {
//   const filteredData = products.filter((product) => {
//     let searchParams = Object.keys(filterQuery).filter(
//       (param) => filterQuery[param as keyof object].length
//     );
//     return searchParams.every((param) =>
//       filterQuery[param as keyof object].includes(
//         (item[param as keyof DataType] as string).toLowerCase()
//       )
//     );
//   });
// };
