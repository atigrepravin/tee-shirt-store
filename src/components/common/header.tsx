import { Link } from "react-router-dom";
import Cart from "../icons/cart";

function Header() {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto py-8 flex justify-between">
        <Link to="/" title="Tee Shirt Store" className="text-3xl font-semibold">
          Tee Shirt Store
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-lg">
            Products
          </Link>
          <Link to="/cart" className="ml-6">
            <Cart />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
