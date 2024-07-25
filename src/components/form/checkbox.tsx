export const Checkbox = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <label className="flex">
      <input type="checkbox" value={value} />
      <span className="ml-2">{label}</span>
    </label>
  );
};
