import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cart, CartContextType } from "../types";
import { cartReducer } from "../reducer/cart";

const LOCAL_STORAGE_KEY = "cart";

const intialCartState: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const loadCartState = (): Cart => {
  const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedCart ? JSON.parse(savedCart) : intialCartState;
};

export const CartContext = createContext<CartContextType>({
  cart: intialCartState,
});

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    intialCartState,
    loadCartState
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
