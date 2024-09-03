const PlusIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" aria-hidden="true" viewBox="0 0 18 18">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1v16M1 9h16"
    />
  </svg>
);
export default PlusIcon;
