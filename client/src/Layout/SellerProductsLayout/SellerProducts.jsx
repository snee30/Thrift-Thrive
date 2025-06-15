import React, { useState, useEffect } from "react";
import sellerState from "../../GlobalState/sellerState";

const SellerProducts = () => {
  const { getProductStatus, allProducts, updateProductStatus } = sellerState();
  const [selectedProduct, setSelectedProduct] = useState(null); // Only one state to track selected product

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
      status: e.target.value, // Update status directly in the selected product state
    }));
  };

  const handleUpdateStatus = () => {
    if (selectedProduct) {
      updateProductStatus(selectedProduct._id, selectedProduct.status); // Update product status
      closeModal();
    }
  };

  return (
    <div>
      {allProducts.length === 0 ? (
        <div>You have no products, Start by adding a new product</div>
      ) : (
        allProducts.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>Price: Rs. {product.price}</p>
            <p>Status: {product.status}</p>
            {product.status !== "available" &&
              product.status !== "pending payment" && (
                <div>
                  <p>Delivery Location: {product.delivery_location}</p>
                  <p>Buyer Phone: {product.buyer_phone}</p>
                  <button onClick={() => openModal(product)}>
                    Update Status
                  </button>
                </div>
              )}
          </div>
        ))
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              className="text-gray-500 hover:text-black float-right text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">
              {selectedProduct.name}
            </h2>
            <p className="mt-1">Phone: {selectedProduct.buyer_phone}</p>
            <p className="mt-1">
              Delivery Location: {selectedProduct.delivery_location}
            </p>
            <p className="mb-2">Current Status: {selectedProduct.status}</p>

            <label htmlFor="status-dropdown" className="block mb-1 font-medium">
              Update Status:
            </label>
            <select
              id="status-dropdown"
              value={selectedProduct.status}
              onChange={handleStatusChange}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            >
              <option value="default">Update Status</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>

            <button
              onClick={handleUpdateStatus}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
            >
              Update Status
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerProducts;
