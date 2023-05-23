import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Searchbar from "../Components/Searchbar";
function Register() {
  return (
    <div className="text-center">
      <Header />
      <Searchbar />
      <p className="text-black  font-sans mt-12">Home - Crete Account</p>
      <p className="text-black text-4xl font-bold  mt-12">
        login or Create an Account
      </p>
      <br />
      <br />
      <div className="flex-row justify-between space-x-7 mb-14">
        <Link to={"/"} className="text-xl text-purple-600">
          Click Here To Go Home
        </Link>

        <Link to={"/product-page"} className="text-xl text-purple-600">
          Click Here To Go Product Page
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
