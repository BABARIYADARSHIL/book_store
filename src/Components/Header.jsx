import { Button } from "@mui/material";
import React from "react";
// import { logo } from "../assets";
import logo from "../assets/logo.jpg";
import { HiShoppingCart } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center bg-white">
        <img src={logo} alt="TatvaSoft_Logo" className="h-24 ml-40 w-44" />
        <div className="mr-40 justify-between space-x-1">
          <Button
            variant="text"
            sx={{ color: "#f14d54" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>

          <Button
            variant="text"
            sx={{ color: "#f14d54" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#f14d54", borderColor: "#f14d54" }}
            startIcon={<HiShoppingCart />}
            onClick={() => {
              navigate("/cart-page");
            }}
          >
            cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
