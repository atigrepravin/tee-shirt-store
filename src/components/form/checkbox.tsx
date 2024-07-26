export const Checkbox = ({
  label,
  value,
  onChange,
  groupName,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  groupName?: string;
}) => {
  return (
    <label className="flex">
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
