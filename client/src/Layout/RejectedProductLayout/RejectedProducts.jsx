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
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#7f5539] mb-8 text-center">
        Rejected Products
      </h1>

      {loadingRejectedProducts ? (
        <div className="text-center text-[#7f5539] text-lg font-medium">
          Loading...
        </div>
      ) : rejectedProducts.length === 0 ? (
        <div className="bg-[#fef3c7] text-[#7f5539] py-16 px-6 rounded-xl shadow-inner text-center">
          <div className="text-5xl mb-4">❌</div>
          <p className="text-xl font-semibold">No Products Rejected</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {rejectedProducts.map((product, index) => (
            <IndividualProduct key={index} details={product} role="admin" />
          ))}
        </div>
      )}
    </div>
  );
};

export default RejectedProducts;
