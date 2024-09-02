// src/types.ts

export interface Product {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
}

export interface CartItem extends Product {}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export type CartAction =
  | {
      type: "ADD_TO_CART";
      product: Product;
    }
  | {
      type: "REMOVE_FROM_CART";
      productId: number;
    }
  | { type: "UPDATE_CART_QUANTITY"; productId: number; quantity: number };

export interface CartContextType {
  cart: Cart;
  dispatch?: React.Dispatch<CartAction>;
}
