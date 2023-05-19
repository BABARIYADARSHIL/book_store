import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function Register() {
  return (
    <div className="text-center">
      <Header />
      <p className="font-sans text-center font-bold text-2xl text-red-500">
        Here is The Register Page
      </p>
      <hr />
      <br />
      <Link to={"/"} className="text-xl text-red-500">
        Click Here To Go Home
      </Link>
      <br />
      <br />
      <Link to={"/product-page"} className="text-xl text-red-500">
        Click Here To Go Product Page
      </Link>
      <br />
      <br />
      <Link to={"/login"} className="text-xl text-red-500">
        Click Here To Login
      </Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Register;
