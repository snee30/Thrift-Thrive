// RejectedProducts.tsx
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
    <div className="pt-28 px-6  mx-auto bg-sage min-h-screen w-100%">
      <h1 className="text-3xl text-forestgreen font-bold text- mb-4 bg-cream text-center mt-10 rounded-lg p-4 shadow-md w-max mx-auto">
        Rejected Products
      </h1>

      {loadingRejectedProducts ? (
        <div className="text-center text-[#7f5539] text-lg font-medium animate-pulse">
          Loading rejected items...
        </div>
      ) : rejectedProducts.length === 0 ? (
        <div className="bg-cream text-[#7f5539] py-20 px-8 rounded-xl shadow-lg text-center space-y-4 max-w-2xl mb-4 mx-auto">
          <div className="text-6xl">📦</div>
          <p className="text-2xl font-semibold">No Rejected Products Found</p>
          <p className="text-md">
            All items have been approved or are under review.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rejectedProducts.map((product, index) => (
            <IndividualProduct key={index} details={product} role="admin" />
          ))}
        </div>
      )}
    </div>
  );
};

export default RejectedProducts;
