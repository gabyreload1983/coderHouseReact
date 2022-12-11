import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList(
        cartList.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + quantity };
          } else {
            return product;
          }
        })
      );
    } else {
      setCartList((prev) => [...prev, { ...item, quantity }]);
    }
  };
  const removeItem = (itemId) => {
    setCartList((prev) => prev.filter((item) => item.id !== itemId));
  };
  const clear = () => {
    setCartList([]);
  };
  const isInCart = (id) => {
    return cartList.find((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
