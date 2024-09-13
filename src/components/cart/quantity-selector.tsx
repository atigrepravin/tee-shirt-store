import MinusIcon from "../icons/minus";
import PlusIcon from "../icons/plus";
import { useCart } from "../hooks/use-cart";

export const QuantitySelector = ({
  productId,
  cartItemQuantity,
  remaningStock,
}: {
  productId: number;
  cartItemQuantity: number;
  remaningStock: number;
}) => {
  const { handleUpdateCartQuanity, handleRemoveFromCart } = useCart();

  const increaseQuantity = () => {
    handleUpdateCartQuanity(productId, cartItemQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (cartItemQuantity > 1) {
      handleUpdateCartQuanity(productId, cartItemQuantity - 1);
    } else {
      handleRemoveFromCart(productId);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={decreaseQuantity}
          type="button"
          className="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-10 w-10 focus:ring-gray-100 cfocus:ring-2 focus:outline-none"
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <input
          type="text"
          className="flex-shrink-0 text-gray-900 border-0 bg-transparent text-base font-normal focus:outline-none focus:ring-0 max-w-[4rem] text-center"
          value={cartItemQuantity}
          readOnly
        />
        <button
          onClick={increaseQuantity}
          type="button"
          disabled={remaningStock < 1}
          className="flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-10 w-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="text-sm mt-3 text-center md:text-left">
        In Stock: {remaningStock}
      </div>
    </div>
  );
};
