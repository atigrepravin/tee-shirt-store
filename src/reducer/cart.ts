import { Cart, CartAction, CartItem } from "../types";

export const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem: CartItem = { ...action.product, quantity: 1 };
      return {
        items: [...state.items, newItem],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.product.price,
      };
      return state;
    case "REMOVE_FROM_CART":
      return state;
    case "UPDATE_CART_QUANTITY":
      return state;
    default:
      return state;
  }
};
