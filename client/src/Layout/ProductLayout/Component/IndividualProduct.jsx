import React from "react";

const IndividualProduct = ({
  name,
  price,
  imageUrl,
  description,
  condition,
}) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Rs.{price}</p>
      <p>{condition}</p>
    </div>
  );
};

export default IndividualProduct;
