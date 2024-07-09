import { createContext, useState } from "react";
import collections from "../assets/collections";

export const ContextProvider = createContext(null);
const defaultCart = () => {
  let cart = {};
  for (let index = 0; index < collections.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const Context = (props) => {
  const [cart, setCart] = useState(defaultCart());

  console.log(collections);
 
  console.log(cart, "fdhd");

  const addCart = (cardId) => {
    setCart((prev) => ({ ...prev, [cardId]: prev[cardId] + 1 }));
    console.log(cart, "added")
  };
  const removeCart = (cardId) => {
    setCart((prev) => ({ ...prev, [cardId]: prev[cardId] - 1 }));
  };
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let iteminfo = collections.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.price * cart[item];
      }
    }
    return totalAmount;
  };

  const totalCartDisplay = () => {
    let totalCart = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        totalCart += cart[item];
      }
    }
    return totalCart;
  };
  const contextValue = {
    collections,
    cart,
    addCart,
    removeCart,
    totalCartAmount, 
    totalCartDisplay
  };
  return (
    <ContextProvider.Provider value={contextValue}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
// import { createContext } from 'react';
// import collections from "../assets/collections";

// export const Context = createContext(null);

// const ContextProvider = ({ children }) => {
//   const contextValue = { collections };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// }

// export default ContextProvider;
