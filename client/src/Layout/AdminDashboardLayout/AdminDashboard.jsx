import { useAdminStore } from "../../GlobalState/useAdminStore";
import { useEffect } from "react";
import IndividualProduct from "../ProductLayout/Component/IndividualProduct";
import { Link } from "react-router-dom";
import PaymentList from "./PaymentList";
import { authState } from "../../GlobalState/authState";

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
      <div className="flex h-40 w-full justify-center items-center text-[var(--forestgreen)] text-lg font-medium">
        Loading...
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 w-full mx-auto min-h-screen bg-[var(--sage)]">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-[var(--forestgreen)] bg-[var(--cream)] text-center mt-6 rounded-xl p-4 shadow-md w-max mx-auto">
        Welcome {user.name} to the Dashboard
      </h1>

      {/* Unapproved Products Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-[#5d4037] mb-4 bg-[var(--cream)] rounded-lg p-3 shadow w-max">
          Unapproved Products
        </h2>

        <div className="flex flex-wrap gap-6 mb-10">
          {unapprovedProducts.length === 0 ? (
            <div className="text-[var(--forestgreen)] text-base">
              No products pending at the moment
            </div>
          ) : (
            unapprovedProducts.map((product, index) => (
              <IndividualProduct key={index} details={product} role="admin" />
            ))
          )}
        </div>

        {/* Rejected Products Link */}
        <div className="mt-6">
          <Link
            to={"/admin/rejected-products"}
            className="text-md text-[#5d4037] font-medium bg-[var(--cream)] px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
          >
            View Rejected Products
          </Link>
        </div>
      </div>

      {/* Payments Section */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold text-[#5d4037] mb-4 bg-[var(--cream)] rounded-lg p-3 shadow w-max">
          Confirm the Payments
        </h2>
        <PaymentList />
      </div>
    </div>
  );
};

export default AdminDashboard;
