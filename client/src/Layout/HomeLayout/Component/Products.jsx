import React from "react";
import { featuredProductData } from "./Data/featuredProductData";
import IndividualFeatureProduct from "./IndividualFeatureProduct";

const Products = () => {
  return (
    <div className="w-full bg-white p-5">
      {/* Featured Products Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-darkbrown">Featured Products</h2>
        <p className="text-forestgreen mt-2">Save Money</p>
      </div>

      {/* Products Grid - Left Aligned */}
      <div className="flex gap-5 flex-wrap justify-start">
        {featuredProductData.map((product, index) => (
          <>
            <IndividualFeatureProduct
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
