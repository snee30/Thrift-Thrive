import React, { useEffect } from "react";
import sellerState from "../../GlobalState/sellerState";
import IndividualNonLinkProduct from "./IndividualNonLinkProduct";

const SoldProducts = () => {
  const { getSoldProducts, soldProducts } = sellerState();

  useEffect(() => {
    getSoldProducts();
  }, []);

  return (
    <div className="pt-50">
      {soldProducts.length === 0 ? (
        <div>No Pending Products</div>
      ) : (
        soldProducts.map((product, index) => (
          <IndividualNonLinkProduct details={product} key={index} />
        ))
      )}
    </div>
  );
};

export default SoldProducts;
