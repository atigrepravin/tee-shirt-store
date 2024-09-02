import { CartItem } from "../../types";
import { QuantitySelector } from "../common/quantity-selector";

export const CartItemCard = ({
  cartItem,
  handleRemoveFromCart,
}: {
  cartItem: CartItem;
  handleRemoveFromCart: (id: number) => void;
}) => {
  return (
    <div className="border-b first:border-t justify-between flex p-6 gap-6">
      <div className="flex">
        <a href="#" className="h-24">
          <img
            className="rounded-t-lg object-cover h-full w-full"
            src={cartItem.imageURL}
            alt={cartItem.name}
          />
        </a>
        <div className="mx-6">
          <a href="#">
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              {cartItem.name}
            </h5>
          </a>
          <div className="text-sm">
            {cartItem.color} | {cartItem.gender} | {cartItem.type}
          </div>
          <div className="text-base font-semibold my-2">₹ {cartItem.price}</div>
        </div>
      </div>
      <div className="flex flex-wrap content-center mx-8">
        <QuantitySelector
          productId={cartItem.id}
          productQuanity={cartItem.quantity}
        />
      </div>
      <div className="flex content-center flex-wrap">
        <button
          onClick={() => handleRemoveFromCart(cartItem.id)}
          className="items-center bg-gray-100 hover:bg-gray-200 border border-gray-300 h-10 px-6 py-2 rounded-lg  focus:outline-none"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
