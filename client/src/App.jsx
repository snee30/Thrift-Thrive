import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import AboutLayout from "./Layout/AboutLayout";
import BecomeASellerLayout from "./Layout/BecomeASellerLayout";
import ProductLayout from "./Layout/ProductLayout";
import LoginLayout from "./Layout/LoginLayout";
import Navbar from "./Components/Navbar";
import SignupLayout from "./Layout/SignupLayout";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { authState } from "./GlobalState/authState";
import IndividualProductClick from "./Layout/IndividualProductClick";

export default function App() {
  const { checkAuth, role } = authState();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        {/* Navbar Links */}
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/products" element={<ProductLayout />} />

        {/* Auth Routing */}
        <Route
          path="/login/:role"
          element={!role ? <LoginLayout /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup/:role"
          element={!role ? <SignupLayout /> : <Navigate to={"/"} />}
        />

        {/* Seller Routing */}
        <Route
          path="/sell"
          element={
            !role || role === "admin" || role === "buyer" ? (
              <Navigate to="/signup/seller" />
            ) : (
              <BecomeASellerLayout />
            )
          }
        />

        {/* Products Routing */}
        {/* Individual Product */}
        <Route
          path="/product/:productId"
          element={<IndividualProductClick />}
        />

        {/* Not Found Page */}
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-3xl font-bold text-gray-700">
                Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
