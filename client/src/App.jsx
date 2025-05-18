import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import AboutLayout from "./Layout/AboutLayout";
import BecomeASellerLayout from "./Layout/BecomeASellerLayout";
import ProductLayout from "./Layout/ProductLayout";
import LoginLayout from "./Layout/LoginLayout";
import Navbar from "./Components/Navbar";
import SigninLayout from "./Layout/SigninLayout";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { authState } from "./GlobalState/authState";

export default function App() {
  const { checkAuth } = authState();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/sell" element={<BecomeASellerLayout />} />
        <Route path="/products" element={<ProductLayout />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/signin" element={<SigninLayout />} />
      </Routes>
    </Router>
  );
}
