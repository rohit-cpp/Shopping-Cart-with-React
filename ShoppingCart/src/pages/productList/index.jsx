import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const ProductListPage = () => {
  const { listOfProducts } = useContext(ShoppingCartContext);
  console.log(listOfProducts);

  return <div>ProductListPage</div>;
};

export default ProductListPage;
