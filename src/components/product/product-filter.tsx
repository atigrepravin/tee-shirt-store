import { useState } from "react";
import {
  PRODUCT_FILTER_ATTRIBUTES,
  PRODUCT_FILTER_DEFAULT_FORM_VALUE,
} from "../../constants/product";
import { Checkbox } from "../form/checkbox";

export const ProductFilter = () => {
  const [formData, setFormData] = useState(PRODUCT_FILTER_DEFAULT_FORM_VALUE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.dataset.groupName;
    if (!key) return;
    const { value, checked } = e.target;
    let attributeValues: string[] = [];
    if (checked) {
      attributeValues = [...formData[key as keyof object], value];
    } else {
      attributeValues = [...formData[key as keyof object]].filter(
        (item) => item !== value
      );
    }
    setFormData({ ...formData, [key]: attributeValues });
  };

  return (
    <div className="border p-8">
      {PRODUCT_FILTER_ATTRIBUTES.map((attribute) => {
        return (
          <div className="mb-6 last:mb-0">
            <div className="font-semibold mb-2">{attribute.displayName}</div>
            <div className="flex flex-col gap-1">
              {attribute.options.map((option) => {
                return (
                  <Checkbox
                    onChange={handleChange}
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
