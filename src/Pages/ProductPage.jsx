import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function ProductPage() {
  return (
    <div className="text-center">
      <Header />
      <p className="font-sans text-center font-bold text-2xl text-yellow-900">
        Product Page
      </p>
      <hr />
      <br />
      <Link to={"/cart-page"} className="text-xl text-yellow-900">
        Click Here To Go Cart Page
      </Link>
      <br />
      <br />
      <Link to={"/"} className="text-xl text-yellow-900">
        Click Here To Go Home
      </Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ProductPage;
