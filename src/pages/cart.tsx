import { CartItemCard } from "../components/cart/cart-item-card";
import { useCart } from "../components/hooks/useCart";
import { CartItem } from "../types";

const Cart = () => {
  const { cart, handleRemoveFromCart } = useCart();

  if (!cart.items.length)
    return (
      <div className="text-3xl py-8 flex justify-center">
        Your cart is empty.
      </div>
    );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Shopping Cart</h2>
      <div className="flex gap-20">
        <div className="grow">
          {!!cart.items &&
            cart.items.map((cartItem: CartItem) => (
              <CartItemCard
                key={cartItem.id}
                cartItem={cartItem}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
        </div>
        <div className="w-80 border p-8 top-32">
          <h3 className="text-lg font-semibold m-1">Order Summary</h3>
          <div className="flex justify-between my-3">
            <div>Items:</div>
            <div>{cart.totalItems}</div>
          </div>
          <div className="flex border-t py-3 justify-between font-semibold">
            <div>Total:</div>
            <div>₹ {cart.totalPrice}</div>
          </div>
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
