import { Cart, CartAction, CartItem } from "../types";

export const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let updatedItems;
      const existingItemIndex = state.items.findIndex(
        (item: CartItem) => item.id === action.product.id
      );

      //if item already exist in cart
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = action.product;
      } else {
        //add new item to cart
        updatedItems = [...state.items, action.product];
      }

      return {
        ...state,
        items: updatedItems,
        totalItems: action.totalItems,
        totalPrice: action.totalPrice,
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.productId
      );
      return {
        ...state,
        items: updatedItems,
        totalItems: action.totalItems,
        totalPrice: action.totalPrice,
      };
    }
    // case "UPDATE_CART_QUANTITY": {
    //   const itemIndex = state.items.findIndex(
    //     (item: CartItem) => item.id === action.productId
    //   );
    //   if (itemIndex !== -1) {
    //     const updatedItems = [...state.items];
    //     const selectedItem = updatedItems[itemIndex];
    //     //reset
    //     let updatedTotalItems = state.totalItems - selectedItem.quantity;
    //     updatedTotalItems = updatedTotalItems + action.quantity;
    //     let updatedTotalPrice =
    //       state.totalPrice - selectedItem.quantity * selectedItem.price;
    //     updatedTotalPrice =
    //       updatedTotalPrice + action.quantity * selectedItem.price;
    //     return {
    //       ...state,
    //       items: updatedItems,
    //       totalItems: updatedTotalItems,
    //       totalPrice: updatedTotalPrice,
    //     };
    //   }
    //   return state;
    // }
    default:
      return state;
  }
};
