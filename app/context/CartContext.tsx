"use client";
import { createContext, useContext, useState, ReactNode } from "react";
type CartItem = {
  name: string;
  price: number; 
  qty: number;
  img?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  updateItemQuantity: (name: string, qty: number) => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, item]; 
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const updateItemQuantity = (name: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(name);
    } else {
      setCart((prev) =>
        prev.map((i) => (i.name === name ? { ...i, qty } : i))
      );
    }
  };

  const totalItems = cart.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateItemQuantity, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
