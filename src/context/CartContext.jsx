import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(null);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setMessage(`${product.title.slice(0, 25)}... added to cart!`);
    setTimeout(() => setMessage(null), 3000);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, total, message }}>
      {children}
    </CartContext.Provider>
  );
};
