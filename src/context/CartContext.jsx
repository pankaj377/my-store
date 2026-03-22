import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: qty }
          : item
      )
    );

  };
  const clearCart = () => {
  setCart([]);
};

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
       value={{
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart
  }}
    >
      {children}
    </CartContext.Provider>
  );
};