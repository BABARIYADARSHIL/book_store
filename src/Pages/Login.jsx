import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { TextField } from "@mui/material";
import Searchbar from "../Components/Searchbar";
function Login() {
  return (
    <div className="text-center flex-1 ">
      <Header />
      <Searchbar />
      <p className="font-sans text-center font-bold text-2xl text-purple-600 my-7">
        Here is The Login Page
      </p>
      <hr /> <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter your Email"
        variant="outlined"
        type={"email"}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Enter your Password"
        variant="outlined"
        type={"password"}
      />
      <br />
      <br />
      <Button variant="contained">Login</Button>
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
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Login;
