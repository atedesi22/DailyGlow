import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialiser le panier depuis le localStorage (si existant)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('dailyGlow_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sauvegarder dans le localStorage à chaque modification du panier
  useEffect(() => {
    localStorage.setItem('dailyGlow_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);