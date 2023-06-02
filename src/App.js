import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import { AuthWarpper } from "./context/auth";
import "../src/App.css";

import MyNavigation from "./MyNavigation";

function App() {
  return (
    <BrowserRouter>
      <AuthWarpper>
        <ToastContainer />
        <Header />
        <Searchbar />
        <MyNavigation />
        <Footer />
      </AuthWarpper>
    </BrowserRouter>
  );
}

export default App;
