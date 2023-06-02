import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthWarpper, useAuthContext } from "./context/auth";
import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/Register";

function MyNavigation() {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={"/login"} />;
  return (
    <Routes>
      <Route path="/" element={authContext.user.id ? <Home /> : Redirect} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/cart-page" element={<CartPage />} />
    </Routes>
  );
}

export default MyNavigation;
