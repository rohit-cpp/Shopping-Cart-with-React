import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";

function App() {
  return (
    <Routes>
      <Route path="/product-list" element={<ProductListPage />} />
      <Route path="/product-details/:id" element={<ProductDetailsPage />} />
      <Route path="/product-cart" element={<CartListPage />} />
    </Routes>
  );
}

export default App;
