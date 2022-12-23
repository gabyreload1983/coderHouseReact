import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const copyCart = [...cartList];
      const index = copyCart.findIndex((i) => i.id === item.id);
      copyCart[index].quantity += quantity;
      setCartList(copyCart);
    } else {
      item.quantity = quantity;
      setCartList((prev) => [...prev, item]);
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
  const calcSubtotal = (id) => {
    const index = cartList.findIndex((i) => i.id === id);
    return cartList[index].quantity * cartList[index].price;
  };
  const calcTotal = () => {
    return cartList.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const calcItems = () => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        calcSubtotal,
        calcTotal,
        calcItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
