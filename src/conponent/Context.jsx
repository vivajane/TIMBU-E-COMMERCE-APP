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
  const contextValue = {
    collections,
    cart,
    addCart,
    removeCart
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
