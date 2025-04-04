import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

import React from "react";

const ShoppingCartProvider = ({ children }) => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handelCartApi() {
    try {
      const response = await fetch("https://dummyjson.com/carts");
      const result = await response.json();

      if (result && result?.carts) {
        setListOfProducts(result?.carts);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handelCartApi();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ listOfProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
