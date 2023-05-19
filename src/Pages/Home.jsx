import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="text-center">
      <Header />
      <p className="font-sans  font-bold text-2xl text-blue-300">
        Welcome to Home Page
      </p>
      <hr />
      <br />
      <Link to={"/login"} className="text-xl text-blue-300">
        Click Here To Login
      </Link>
      <br />
      <br />
      <Link to={"/register"} className="text-xl text-blue-300">
        Click Here To Register
      </Link>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
