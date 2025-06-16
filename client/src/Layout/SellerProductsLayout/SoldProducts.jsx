import React, { useEffect } from "react";
import sellerState from "../../GlobalState/sellerState";
import IndividualNonLinkProduct from "./IndividualNonLinkProduct";

const SoldProducts = () => {
  const { getSoldProducts, soldProducts } = sellerState();

  useEffect(() => {
    getSoldProducts();
  }, []);

  return (
    <div className="pt-28 px-6">
      <h1 className="text-2xl font-semibold text-[var(--darkgreen)] mb-6">
        Sold Products
      </h1>

      {soldProducts.length === 0 ? (
        <div className="text-gray-500 text-center bg-white p-6 rounded-xl shadow-md">
          You have no sold products yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {soldProducts.map((product, index) => (
            <IndividualNonLinkProduct details={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SoldProducts;
