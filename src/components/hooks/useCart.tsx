import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { CartAction, Product } from "../../types";

export const useCart = () => {
  const cartContext = useContext(CartContext);
  const { cart, dispatch } = cartContext;

  const handleDispatch = (action: CartAction) => {
    if (dispatch) {
      dispatch(action);
    }
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    const existingItem = cart.items.find(
      (cartItem) => cartItem.id === product.id
    );

    let updatedQuanity = 1;
    if (existingItem) {
      updatedQuanity = existingItem.quantity + quantity;
    }
    handleDispatch({
      type: "ADD_TO_CART",
      product: {
        ...product,
        stock: product.quantity,
        quantity: updatedQuanity,
      },
    });
  };
  const handleRemoveFromCart = (productId: number) => {
    handleDispatch({
      type: "REMOVE_FROM_CART",
      productId,
    });
  };
  const handleUpdateCartQuanity = (productId: number, quantity: number) => {
    handleDispatch({
      type: "UPDATE_CART_QUANTITY",
      productId,
      quantity,
    });
  };

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCartQuanity,
  };
};
