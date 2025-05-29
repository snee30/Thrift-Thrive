import React from "react";

const IndividualProduct = (details) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Product Image */}
      <img
        src={details.productImage} // Use the imageUrl from productsdata
        alt="image"
        className="w-full h-100 object-fit"
      />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{details.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          Category: {details.category}
        </p>
        <p className="text-gray-800 font-bold">Rs.{details.price}</p>
        <p className="text-sm text-gray-500">Condition: {details.condition}</p>
        <p className="text-sm text-gray-500">
          Negotiable: {details.negotiable ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default IndividualProduct;
