import React, { useEffect } from "react";
import sellerState from "../../GlobalState/sellerState";
import IndividualNonLinkProduct from "./IndividualNonLinkProduct";

const PendingProducts = () => {
  const { getPendingProducts, pendingProducts } = sellerState();

  useEffect(() => {
    getPendingProducts();
  }, []);

  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-[var(--primary)]">
        Pending & Rejected Products
      </h1>

      {pendingProducts.length === 0 ? (
        <div className="text-center text-gray-500 mt-12 text-lg">
          You have no pending or rejected products currently.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pendingProducts.map((product, index) => (
            <IndividualNonLinkProduct details={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingProducts;
