import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function CartPage() {
  return (
    <div className="text-center">
      <Header />
      <p className="font-sans text-center font-bold text-2xl text-green-600">
        This is Cart Page
      </p>
      <hr />
      <br />
      <Link to={"/"} className="text-xl text-green-600">
        Click Here To Go Home
      </Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default CartPage;
