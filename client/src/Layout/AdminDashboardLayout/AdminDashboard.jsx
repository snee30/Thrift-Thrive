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

  const { user } = authState();

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
    <div className="pt-28 px-6 w-100% mx-auto min-h-screen bg-sage ">
      <h1 className="text-3xl text-forestgreen font-bold text- mb-4 bg-cream text-center mt-10 rounded-lg p-4 shadow-md w-max mx-auto ">
        Welcome {user.name} to the Dashboard
      </h1>

      <p className="text-lg text-[#5d4037] font-semibold mb-6 mt-10 rounded-lg p-4 shadow-md w-max  bg-cream">
        Unapproved Products
      </p>

      <div className="flex flex-wrap gap-6 mb-8">
        {unapprovedProducts.length === 0 ? (
          <div className="text-[#7f5539] text-base">
            No products pending at the moment
          </div>
        ) : (
          unapprovedProducts.map((product, index) => (
            <IndividualProduct key={index} details={product} role="admin" />
          ))
        )}
      </div>

      <div className="mt-4">
        <Link
          to={"/admin/rejected-products"}
          className="text-lg text-[#5d4037] font-semibold mb-6 mt-10 rounded-lg p-4 shadow-md w-max  bg-cream transition duration-300"
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
