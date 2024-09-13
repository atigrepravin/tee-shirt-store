import { Product } from "../../types";
import { useCart } from "../hooks/use-cart";

export const ProductCard = ({ product }: { product: Product }) => {
  const { cart, handleAddToCart } = useCart();

  //calculate remaning stock
  const cartItem = cart.items.find((cartItem) => cartItem.id === product.id);
  const remaningStock = product.quantity - (cartItem ? cartItem.quantity : 0);

  return (
    <div className="max-w-sm relative bg-white border border-gray-200 hover:shadow-md">
      <a href="#">
        <img
          className="rounded-t-lg object-cover h-20 md:h-60 w-full"
          src={product.imageURL}
          alt={product.name}
        />
      </a>
      <div className="p-4 md:p-5">
        <a href="#">
          <h5 className="mb-1 md:mb-2 text-base md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="text-xs md:text-sm">
          {product.color} | {product.gender} | {product.type}
        </div>
        <div className="text-base md:text-xl font-semibold my-2 md:my-3">
          ₹ {product.price}
        </div>
        {remaningStock > 0 && remaningStock < 4 && (
          <div className="text-xs mb-2 text-red-600 absolute right-0 md:right-6 md:bottom-16 top-12 md:top-auto bg-slate-300 px-2 py-1">
            Only {remaningStock} left in stock
          </div>
        )}

        <div className="flex justify-center mt-6 md:mt-0">
          {remaningStock > 0 ? (
            <button
              onClick={() => handleAddToCart(product)}
              className="items-center w-full px-3 py-2 font-semibold text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Add to Cart
            </button>
          ) : (
            <div className="items-center w-full px-3 py-2 font-semibold text-center text-white bg-red-400 rounded-lg">
              Out of stock
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
