import { useContext, useEffect, useState } from "react";
import MinusIcon from "../icons/minus";
import PlusIcon from "../icons/plus";
import { CartContext } from "../../context/cart";

export const QuantitySelector = ({
  productId,
  productQuanity,
}: {
  productId: number;
  productQuanity: number;
}) => {
  const [quantity, setQuantity] = useState(productQuanity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form className="">
      <div className=" flex items-center">
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
          value={quantity}
          required
        />
        <button
          onClick={increaseQuantity}
          type="button"
          className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-10 w-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
