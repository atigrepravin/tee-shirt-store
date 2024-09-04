import { Link } from "react-router-dom";
import CartIcon from "../icons/cart";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

function Header() {
  const cartContext = useContext(CartContext);
  const cartTotalItems = cartContext?.cart.totalItems || 0;

  return (
    <header className="border-b border-gray-200 sticky z-50 top-0 bg-white">
      <div className="container md:mx-auto py-4 md:py-8 flex justify-between px-6 md:px-0">
        <Link
          to="/"
          title="Tee Shirt Store"
          className="text-xl md:text-3xl font-semibold"
        >
          Tee Shirt Store
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-base md:text-lg">
            Products
          </Link>
          <Link to="/cart" className="ml-6">
            <div className="relative">
              {!!cartTotalItems && (
                <span className="absolute -right-2 -top-2">
                  <span className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                    {cartTotalItems}
                  </span>
                </span>
              )}
              <CartIcon className="w-7 h-7 md:w-8 md:h-8" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
