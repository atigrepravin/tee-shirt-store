import { Checkbox } from "../form/checkbox";

export const ProductFilter = ({
  filterAttributes,
  handleFilterChange,
}: {
  filterAttributes: any[];
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="border p-8">
      {filterAttributes.map((attribute) => {
        return (
          <div className="mb-6 last:mb-0">
            <div className="font-semibold mb-2">{attribute.displayName}</div>
            <div className="flex flex-col gap-1">
              {attribute.options.map((option: any) => {
                return (
                  <Checkbox
                    onChange={handleFilterChange}
                    label={option.label}
                    value={option.value}
                    groupName={attribute.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
