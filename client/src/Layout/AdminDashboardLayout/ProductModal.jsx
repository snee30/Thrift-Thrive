import React from "react";

const ProductModal = ({ product }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-5xl relative">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Image Carousel */}
          <div className="w-full md:w-5/12">
            <div className="carousel w-full rounded-lg">
              {product.productImages?.map((img, index) => (
                <div
                  id={`slide${index}`}
                  className="carousel-item relative w-full"
                  key={index}
                >
                  <img
                    src={img.url}
                    className="w-full h-80 object-cover"
                    alt={`Product ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-success font-semibold mb-4">
                Rs.{product.price}/-
              </p>

              <div className="text-sm text-gray-700 mb-3 space-y-1">
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category}
                </p>
                <p>
                  <span className="font-semibold">Condition:</span>{" "}
                  {product.condition}
                </p>
                <p>
                  <span className="font-semibold">Negotiable:</span>{" "}
                  {product.negotiable ? "Yes" : "No"}
                </p>
              </div>

              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-1">Description:</p>
                <p>{product.description}</p>
              </div>
            </div>

            {/* Admin-specific buttons can go here */}
            <div className="mt-4 flex gap-2">
              <button className="btn btn-success">Approve</button>
              <button className="btn btn-error">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
