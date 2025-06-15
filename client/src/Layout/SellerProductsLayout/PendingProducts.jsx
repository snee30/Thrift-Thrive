import React, { useEffect } from "react";
import sellerState from "../../GlobalState/sellerState";
import IndividualNonLinkProduct from "./IndividualNonLinkProduct";

const PendingProducts = () => {
  const { getPendingProducts, pendingProducts } = sellerState();

  useEffect(() => {
    getPendingProducts();
  }, []);

  return (
    <div className="pt-50">
      {pendingProducts.length === 0 ? (
        <div>No Pending Products</div>
      ) : (
        pendingProducts.map((product, index) => (
          <IndividualNonLinkProduct details={product} key={index} />
        ))
      )}
    </div>
  );
};

export default PendingProducts;
