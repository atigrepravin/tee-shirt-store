import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-b border-gray-200 py-8 px-8">
      <Link to="/" className="text-3xl font-semibold">
        Tee Shirt Store
      </Link>
    </div>
  );
}

export default Header;
