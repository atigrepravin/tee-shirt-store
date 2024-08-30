import { createContext, ReactNode, useReducer, useState } from "react";
import { Cart, CartContextType } from "../types";
import { cartReducer } from "../reducer/cart";

const intialCartState: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(cartReducer, intialCartState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
