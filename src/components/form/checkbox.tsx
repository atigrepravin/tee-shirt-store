import cn from "classnames";

export const Checkbox = ({
  label,
  value,
  onChange,
  groupName,
  style,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  groupName?: string;
  style?: string;
}) => {
  return (
    <label className={cn("flex cursor-pointer", style)}>
      <input
        onChange={onChange}
        data-group-name={groupName}
        type="checkbox"
        value={value}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};
