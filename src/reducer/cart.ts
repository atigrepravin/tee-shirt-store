import { Cart, CartAction } from "../types";

export const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state;
    case "REMOVE_FROM_CART":
      return state;
    case "UPDATE_CART_QUANTITY":
      return state;
    default:
      return state;
  }
};
