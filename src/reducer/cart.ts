import { Cart, CartAction, CartItem } from "../types";

export const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //if item already exist in cart
      const existingItemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.product.id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.product.price,
        };
      }

      //add new item to cart
      const newItem: CartItem = { ...action.product, quantity: 1 };
      return {
        ...state,
        items: [...state.items, newItem],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.product.price,
      };
    }
    case "REMOVE_FROM_CART": {
      const itemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.productId
      );
      if (itemIndex !== -1) {
        const updatedItems = state.items.filter(
          (item: CartItem) => item.id !== action.productId
        );
        const selectedItem = updatedItems[itemIndex];

        //reset
        const updatedTotalItems = state.totalItems - selectedItem.quantity;
        const updatedTotalPrice =
          state.totalPrice - selectedItem.quantity * selectedItem.price;
        delete updatedItems[itemIndex];
        return {
          items: updatedItems,
          totalItems: updatedTotalItems,
          totalPrice: updatedTotalPrice,
        };
      }
      return state;
    }
    case "UPDATE_CART_QUANTITY": {
      const itemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.productId
      );
      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        const selectedItem = updatedItems[itemIndex];
        //reset
        const updatedTotalItems =
          state.totalItems - selectedItem.quantity + action.quantity;
        const updatedTotalPrice =
          state.totalPrice -
          selectedItem.quantity * selectedItem.price +
          selectedItem.price * action.quantity;
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedTotalItems,
          totalPrice: updatedTotalPrice,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
