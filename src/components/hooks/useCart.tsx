import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { Product } from "../../types";

export const useCart = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.items.find(
      (cartItem) => cartItem.id === product.id
    );
    const totalItems = cart.totalItems + 1;
    const totalPrice = cart.totalPrice + product.price;
    let updatedQuanity = 1;

    if (existingItem) {
      updatedQuanity = existingItem.quantity + 1;
    }
    if (cartContext.dispatch) {
      cartContext.dispatch({
        type: "ADD_TO_CART",
        product: { ...product, quantity: updatedQuanity },
        totalItems,
        totalPrice,
      });
    }
  };
  const handleRemoveFromCart = (productId: number) => {
    const existingItem = cart.items.find(
      (cartItem) => cartItem.id === productId
    );
    if (!existingItem) return;

    const totalItems = cart.totalItems - existingItem.quantity;
    const totalPrice =
      cart.totalPrice - existingItem.quantity * existingItem.price;

    if (cartContext.dispatch) {
      cartContext.dispatch({
        type: "REMOVE_FROM_CART",
        productId,
        totalItems,
        totalPrice,
      });
    }
  };
  const handleUpdateCartQuanity = () => {};

  return { cart, handleAddToCart, handleRemoveFromCart };
};
