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

export interface CartItem extends Product {
  stock: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  errorMessage?: string;
}

export type CartAction =
  | {
      type: "ADD_TO_CART";
      product: CartItem;
    }
  | {
      type: "REMOVE_FROM_CART";
      productId: number;
    }
  | {
      type: "UPDATE_CART_QUANTITY";
      productId: number;
      quantity: number;
    };

export interface CartContextType {
  cart: Cart;
  dispatch?: React.Dispatch<CartAction>;
}

export interface FilterFormData {
  color: string[];
  gender: string[];
  type: string[];
  price: string[];
}

export interface PriceOption {
  label: string;
  min: number;
  max: number;
}
