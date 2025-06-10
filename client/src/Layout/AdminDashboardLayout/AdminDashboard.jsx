import React from "react";
import { useAdminStiore } from "../../GlobalState/useAdminStore";
import { useEffect } from "react";
import IndividualProduct from "../ProductLayout/Component/IndividualProduct";

const AdminDashboard = () => {
  const {
    unapprovedProducts,
    loadingUnapprovedProducts,
    getUnapprovedProducts,
  } = useAdminStiore();

  useEffect(() => {
    getUnapprovedProducts();
  }, [getUnapprovedProducts]);

  if (loadingUnapprovedProducts) {
    return (
      <div className="flex h-40 w-full justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="pt-21">
      <h1>Welcome Sneha</h1>

      <p>Unapproved Products</p>

      <div className="flex gap-4 flex-wrap">
        {unapprovedProducts.length === 0 ? (
          <div>No Products Pending</div>
        ) : (
          unapprovedProducts.map((product, index) => (
            <IndividualProduct key={index} details={product} role="admin" />
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
