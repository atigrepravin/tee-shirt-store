import { PRODUCT_FILTER_ATTRIBUTES } from "../../constants/product";
import { Checkbox } from "../form/checkbox";

export const ProductFilter = () => {
  return (
    <div className="border p-8">
      {PRODUCT_FILTER_ATTRIBUTES.map((attribute) => {
        return (
          <div className="mb-6 last:mb-0">
            <div className="font-semibold mb-2">{attribute.displayName}</div>
            <div className="flex flex-col gap-1">
              {attribute.options.map((option) => {
                return <Checkbox label={option.label} value={option.value} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
