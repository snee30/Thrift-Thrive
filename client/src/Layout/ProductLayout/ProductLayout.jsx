import React from "react";
// import productsdata from "./productsdata"; // Import the products data

const ProductLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* {productsdata.map((product) => (
         
        ))} */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {/* Product Image */}
          <img
            src="/product-images/baggyjeans.png" // Use the imageUrl from productsdata
            alt="image"
            className="w-full h-100 object-fit"
          />

          {/* Product Details */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Jeans</h3>
            <p className="text-gray-600 text-sm mb-2">pp</p>
            <p className="text-gray-800 font-bold">Rs. 999</p>
            <p className="text-sm text-gray-500">Condition: good</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
