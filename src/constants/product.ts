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
    name: "priceRange",
    displayName: "Price Range",
    options: [
      { label: "Under 250", value: "0-250" },
      { label: "₹250 to 450", value: "250-450" },
      { label: "₹450 and above", value: "450-" },
    ],
  },
];

export const PRODUCT_FILTER_DEFAULT_FORM_VALUE =
  PRODUCT_FILTER_ATTRIBUTES.reduce((a, b) => ({ ...a, [b.name]: [] }), {});
