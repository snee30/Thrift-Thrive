import { useEffect } from "react";
import { useAdminStore } from "../../GlobalState/useAdminStore";
import IndividualProduct from "../ProductLayout/Component/IndividualProduct";

const RejectedProducts = () => {
  const { getRejectedProducts, rejectedProducts, loadingRejectedProducts } =
    useAdminStore();

  useEffect(() => {
    getRejectedProducts();
  }, [getRejectedProducts]);
  return (
    <div className="pt-31 px-5">
      <h1>Rejected Products</h1>
      {loadingRejectedProducts ? (
        <div> Loading...</div>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {rejectedProducts.length === 0 ? (
            <div>No Products Rejected</div>
          ) : (
            rejectedProducts.map((product, index) => (
              <IndividualProduct key={index} details={product} role="admin" />
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default RejectedProducts;
