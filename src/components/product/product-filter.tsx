import { PriceOption } from "../../types";
import { Checkbox } from "../form/checkbox";

export const ProductFilter = ({
  filterAttributes,
  handleFilterChange,
  handlePriceRangeChange,
}: {
  filterAttributes: any[];
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceRangeChange: (isChecked: boolean, option: PriceOption) => void;
}) => {
  return (
    <div className="">
      {filterAttributes.map((attribute) => {
        return (
          <div className="mb-6 last:mb-0" key={attribute.name}>
            <div className="font-semibold mb-2">{attribute.displayName}</div>
            <div className="flex flex-col">
              {attribute.options.map((option: PriceOption) => {
                if (attribute.filterType === "range") {
                  return (
                    <Checkbox
                      onChange={(e) =>
                        handlePriceRangeChange(e.target.checked, option)
                      }
                      label={option.label}
                      value={option.label}
                      groupName={attribute.name}
                      key={option.label}
                      style="hover:bg-gray-100 px-2 py-1"
                    />
                  );
                } else {
                  return (
                    <Checkbox
                      onChange={handleFilterChange}
                      label={option.label}
                      value={option.value}
                      groupName={attribute.name}
                      key={option.value}
                      style="hover:bg-gray-100 px-2 py-1"
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
