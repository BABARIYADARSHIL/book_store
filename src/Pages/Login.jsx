import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function Login() {
    return(
        <div className="text-center">
            <Header />
            <p className="font-sans text-center font-bold text-2xl text-purple-600">
                Here is The Login page
            </p>
            <hr />
            <br />
            <Link to={"/"} className="text-xl text-purple-600">
                Here to go home
            </Link>
            <br />
            <br />
            <Link to={"/product-page"} className="text-xl text-purple-600">
                Click Here To Go Product Page
            </Link>
            <br />
            <br />
            <Link to={"/register"} className="text-xl text-purple-600">
                Click Here To Register
            </Link>
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default Login;