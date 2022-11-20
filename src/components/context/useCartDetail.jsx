import { useState } from "react";
import { createContext } from "react";

export const useCartDetail = createContext();

const CartDetailProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProducts = (products) => {
    const exist = cartProducts.find((product) => product.id === products.id);

    if (exist) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === products.id
            ? { ...exist, quantity: exist.quantity + products.quantity }
            : product
        )
      );
    } else {
      setCartProducts([...cartProducts, products]);
    }
  };

  const removeProducts = (id) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  const countTotal = cartProducts.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <useCartDetail.Provider
      value={{
        cartProducts,
        addProducts,
        removeProducts,
        countTotal,
      }}
    >
      {children}
    </useCartDetail.Provider>
  );
};

export default CartDetailProvider;
