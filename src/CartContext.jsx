import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === pizza.id);
      if (existing) {
        return prev.map((i) =>
          i.id === pizza.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...pizza, qty: 1 }];
    });
    setIsOpen(true);
  };

  const remove = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, delta) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );

  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce(
    (s, i) => s + parseInt(i.price.replace(/[₹,]/g, ""), 10) * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, remove, updateQty, count, total, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
