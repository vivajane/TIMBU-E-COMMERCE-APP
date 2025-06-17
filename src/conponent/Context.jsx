import { createContext, useEffect, useState } from "react";
import collections from "../assets/collections";
import { toast } from "react-toastify";

// import collections from "../assets/collections";

export const ContextProvider = createContext(null);

const Context = (props) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart])

  console.log(collections, "collections");

  console.log(cart, "fdhd");

  const addCart = async (cardId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    const cartData = structuredClone(cart);
    if (cartData[cardId]) {
      if (cartData[cardId][size]) {
        cartData[cardId][size] += 1;
      } else {
        cartData[cardId][size] = 1;
      }
    } else {
      cartData[cardId] = {};
      cartData[cardId][size] = 1;
    }

    setCart(cartData);
    alert(`${collections[cardId - 1].name} (${size}) added to cart, view cart`);
    console.log("Added item:", cardId, "Size:", size);
  };
  useEffect(() => {
    console.log(cart, "cart");
  }, [cart]);

  const removeCart = (cardId, size) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[cardId] && newCart[cardId][size]) {
        newCart[cardId][size] -= 1;
        if (newCart[cardId][size] <= 0) {
          delete newCart[cardId][size];
        }
        if (Object.keys(newCart[cardId]).length === 0) {
          delete newCart[cardId];
        }
      }
      return newCart;
    });
  };

  const clearCart = (clearId) => {
    setCart((prev) => ({ ...prev, [clearId]: 0 }));
  };
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      const itemInfo = collections.find(
        (product) => product.id === Number(item)
      );
      if (itemInfo) {
        for (const size in cart[item]) {
          totalAmount += itemInfo.price * cart[item][size];
        }
      }
    }
    return totalAmount;
  };

  const totalCartDisplay = () => {
    let totalItems = 0;
    for (const item in cart) {
      for (const size in cart[item]) {
        totalItems += cart[item][size];
      }
    }
    return totalItems;
  };

  const contextValue = {
    collections,
    cart,
    setCart,
    addCart,
    removeCart,
    totalCartAmount,
    totalCartDisplay,
    clearCart,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <ContextProvider.Provider value={contextValue}>
      {props.children}
    </ContextProvider.Provider>
  );
};
export default Context;
