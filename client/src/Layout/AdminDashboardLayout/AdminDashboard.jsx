import { useAdminStore } from "../../GlobalState/useAdminStore";
import { useEffect } from "react";
import IndividualProduct from "../ProductLayout/Component/IndividualProduct";
import { Link } from "react-router-dom";
import PaymentList from "./PaymentList";

const AdminDashboard = () => {
  const {
    unapprovedProducts,
    loadingUnapprovedProducts,
    getUnapprovedProducts,
    getPendingPayments,
  } = useAdminStore();

  useEffect(() => {
    getUnapprovedProducts();
    getPendingPayments();
  }, [getUnapprovedProducts, getPendingPayments]);

  if (loadingUnapprovedProducts) {
    return (
      <div className="flex h-40 w-full justify-center items-center text-[#7f5539] text-lg font-medium">
        Loading...
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#3e2723] mb-4">
        Welcome, Sneha 👋
      </h1>

      <p className="text-lg text-[#5d4037] font-semibold mb-6">
        Unapproved Products
      </p>

      <div className="flex flex-wrap gap-6 mb-8">
        {unapprovedProducts.length === 0 ? (
          <div className="text-[#7f5539] text-base">No Products Pending</div>
        ) : (
          unapprovedProducts.map((product, index) => (
            <IndividualProduct key={index} details={product} role="admin" />
          ))
        )}
      </div>

      <div className="mt-4">
        <Link
          to={"/admin/rejected-products"}
          className="inline-block bg-[#b08968] hover:bg-[#a1754d] text-white px-5 py-2 rounded-lg font-medium transition duration-300"
        >
          View Rejected Products
        </Link>
      </div>

      <div>
        <h1>Confirm the Payments</h1>
        <PaymentList />
      </div>
    </div>
  );
};

export default AdminDashboard;
