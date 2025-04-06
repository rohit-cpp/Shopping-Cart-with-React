import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

import React from "react";

const ShoppingCartProvider = ({ children }) => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState(null);

  async function handelCartApi() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result?.products) {
        setListOfProducts(result?.products);
        setLoading(false);
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
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
