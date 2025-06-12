import { useAdminStore } from "../../GlobalState/useAdminStore";
import { useEffect } from "react";
import IndividualProduct from "../ProductLayout/Component/IndividualProduct";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    unapprovedProducts,
    loadingUnapprovedProducts,
    getUnapprovedProducts,
  } = useAdminStore();

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

      <Link to={"/admin/rejected-products"}>View Rejected Products</Link>
    </div>
  );
};

export default AdminDashboard;
