import { Cart, CartAction, CartItem } from "../types";

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce(
    (total, item) => (total = total + item.quantity),
    0
  );
  const totalPrice = items.reduce(
    (total, item) => (total = total + item.quantity * item.price),
    0
  );
  return { totalItems, totalPrice };
};

export const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.product.id
      );
      let updatedItems = [...state.items, action.product];

      //if item already exist in cart
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = action.product;
      }

      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.productId
      );
      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    case "UPDATE_CART_QUANTITY": {
      const itemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.productId
      );
      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity = action.quantity;
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        return {
          ...state,
          items: updatedItems,
          totalItems,
          totalPrice,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
