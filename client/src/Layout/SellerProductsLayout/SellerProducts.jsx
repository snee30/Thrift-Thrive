import React, { useState, useEffect } from "react";
import sellerState from "../../GlobalState/sellerState";

const SellerProducts = () => {
  const { getProductStatus, allProducts, updateProductStatus } = sellerState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProductStatus();
  }, [getProductStatus]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleStatusChange = (e) => {
    setSelectedProduct((prev) => ({
      ...prev,
      status: e.target.value,
    }));
  };

  const handleUpdateStatus = () => {
    if (selectedProduct) {
      updateProductStatus(selectedProduct._id, selectedProduct.status);
      closeModal();
    }
  };

  return (
    <div className="p-6 pt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {allProducts.length === 0 ? (
        <div className="text-center text-gray-600 col-span-full">
          You have no products. Start by adding a new product.
        </div>
      ) : (
        allProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border border-[var(--darksage)] hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h1 className="text-lg font-semibold text-[var(--darkgreen)]">
              {product.name}
            </h1>
            <p className="text-gray-700 font-medium">Rs. {product.price}</p>
            <p className="text-sm text-gray-500 mb-1">
              Status: {product.status}
            </p>

            {product.status !== "available" &&
              product.status !== "pending payment" && (
                <div className="mt-3 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">Delivery Location:</span>{" "}
                    {product.delivery_location}
                  </p>
                  <p>
                    <span className="font-semibold">Buyer Phone:</span>{" "}
                    {product.buyer_phone}
                  </p>
                  <button
                    onClick={() => openModal(product)}
                    className="mt-3 bg-[var(--sage)] text-white px-4 py-1 rounded hover:bg-[var(--darksage)] transition"
                  >
                    Update Status
                  </button>
                </div>
              )}
          </div>
        ))
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-3 text-[var(--darkgreen)]">
              {selectedProduct.name}
            </h2>

            <div className="mt-2 text-gray-600 text-sm">
              <p>Phone: {selectedProduct.buyer_phone}</p>
              <p>Delivery Location: {selectedProduct.delivery_location}</p>
              <p className="mt-1 mb-2">
                Current Status: {selectedProduct.status}
              </p>

              <label
                htmlFor="status-dropdown"
                className="block font-medium mb-1"
              >
                Update Status:
              </label>
              <select
                id="status-dropdown"
                value={selectedProduct.status}
                onChange={handleStatusChange}
                className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              >
                <option value="default">Choose Status</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>

              <button
                onClick={handleUpdateStatus}
                className="bg-[var(--sage)] hover:bg-[var(--darksage)] text-white font-semibold px-4 py-2 w-full rounded transition"
              >
                Confirm Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerProducts;
