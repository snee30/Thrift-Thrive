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
import AdminDashboard from "./Layout/AdminDashboardLayout/AdminDashboard";
import AdminApproveLayout from "./Layout/AdminProductApproveLayout/AdminApproveLayout";
import RejectedProducts from "./Layout/RejectedProductLayout/RejectedProducts";
import Checkout from "./Layout/CheckoutLayout/Checkout";

export default function App() {
  const { checkAuth, role, checkAuthLoading } = authState();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkAuthLoading) {
    return <div>Loading...</div>;
  }

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

        {/* Buyer Routing
         */}
        <Route
          path="/checkout"
          element={
            !role || role === "admin" || role === "seller" ? (
              <Navigate to="/signup/buyer" />
            ) : (
              <Checkout />
            )
          }
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

        {/* Admin Route */}
        <Route
          path="/admin/dashboard"
          element={
            !role || role === "seller" || role === "buyer" ? (
              <Navigate to="/" />
            ) : (
              <AdminDashboard />
            )
          }
        />
        <Route
          path="/admin/rejected-products"
          element={
            !role || role === "seller" || role === "buyer" ? (
              <Navigate to="/" />
            ) : (
              <RejectedProducts />
            )
          }
        />
        <Route
          path="/admin/product/:productId"
          element={
            !role || role === "seller" || role === "buyer" ? (
              <Navigate to="/" />
            ) : (
              <AdminApproveLayout />
            )
          }
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
