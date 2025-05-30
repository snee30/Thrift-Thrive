import { useState } from "react";

const BecomeASellerLayout = () => {
  const [activeTab, setActiveTab] = useState("guidelines"); // State to manage active tab
  const [sellerName, setSellerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [dressCondition, setDressCondition] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [showCommissionModal, setShowCommissionModal] = useState(false); // State for commission modal

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !sellerName ||
      !phoneNumber ||
      !productName ||
      !productDescription ||
      !dressCondition ||
      !priceRange.min ||
      !priceRange.max ||
      !image
    ) {
      setError("Please fill out all fields and upload an image!");
      return;
    }

    // Clear error if validation passes
    setError("");

    // Log form data
    console.log({
      sellerName,
      phoneNumber,
      productName,
      productDescription,
      dressCondition,
      priceRange,
      image,
    });

    // Reset form fields
    setSellerName("");
    setPhoneNumber("");
    setProductName("");
    setProductDescription("");
    setDressCondition("");
    setPriceRange({ min: 0, max: 0 });
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige to-sage w-full pt-30 flex items-center justify-center">
      {/* Main Container */}
      <div className="w-full max-w-3xl px-4">
        {" "}
        {/* Adjusted width */}
        {/* Tab Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab("guidelines")}
            className={`px-8 py-3 rounded-lg text-lg font-semibold ${
              activeTab === "guidelines"
                ? "bg-brown text-cream"
                : "bg-sage text-darkbrown hover:bg-darkbrown hover:text-cream"
            } transition-colors duration-300`}
          >
            Guidelines
          </button>
          <button
            onClick={() => setActiveTab("sellerForm")}
            className={`px-8 py-3 rounded-lg text-lg font-semibold ${
              activeTab === "sellerForm"
                ? "bg-brown text-cream"
                : "bg-sage text-darkbrown hover:bg-darkbrown hover:text-cream"
            } transition-colors duration-300`}
          >
            Seller Form
          </button>
        </div>
        {/* Content Section */}
        <div className="bg-sage p-8 rounded-xl shadow-2xl">
          {activeTab === "guidelines" && (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Text on the Left */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-darkbrown mb-4">
                  Guidelines for Selling
                </h2>
                <p className="text-darkbrown">
                  Selling at Thrift & Thrive is easy and convenient. Simply
                  follow these steps:
                </p>
                <ul className="list-disc list-inside mt-4 text-darkbrown">
                  <li>Sort the items you would like to sell.</li>
                  <li>Ensure items are in good condition.</li>
                  <li>Pack the items securely.</li>
                  <li>Send them to us using our provided shipping label.</li>
                  <li>
                    Earn a decent passive income once your items are sold!
                  </li>
                </ul>
                <p className="mt-4 text-darkbrown">
                  Join 5000+ sellers who choose Thrift & Thrive to de-clutter
                  their closets and homes.
                </p>

                {/* Commission and Fees Button */}
                <button
                  onClick={() => setShowCommissionModal(true)}
                  className="mt-5 bg-darkbrown w-max self-center p-3 px-8 text-cream rounded-lg hover:bg-brown cursor-pointer"
                >
                  Commission and Fees
                </button>
              </div>

              {/* Image on the Right */}
              <div className="flex-1">
                <img
                  src="/other-images/ktakti.png" // Update this path
                  alt="Selling Guidelines"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}

          {activeTab === "sellerForm" && (
            <div className="text-darkbrown">
              <h2 className="text-2xl font-bold text-darkbrown mb-4">
                Seller Form
              </h2>
              <form
                className="flex flex-col gap-3 w-full"
                onSubmit={handleSubmit}
              >
                {/* Seller Name */}
                <div className="flex flex-col">
                  <label htmlFor="sellerName" className="ml-1 text-darkbrown">
                    Seller Name
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    id="sellerName"
                    placeholder="Enter your name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    className="bg-white p-2 rounded-lg placeholder:text-base"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber" className="ml-1 text-darkbrown">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white p-2 rounded-lg placeholder:text-base"
                    required
                  />
                </div>

                {/* Product Name */}
                <div className="flex flex-col">
                  <label htmlFor="productName" className="ml-1 text-darkbrown">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="bg-white p-2 rounded-lg placeholder:text-base"
                    required
                  />
                </div>

                {/* Product Description */}
                <div className="flex flex-col">
                  <label
                    htmlFor="productDescription"
                    className="ml-1 text-darkbrown"
                  >
                    Product Description
                  </label>
                  <textarea
                    name="productDescription"
                    id="productDescription"
                    placeholder="Describe your product"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="bg-white p-2 rounded-lg placeholder:text-base"
                    rows="4"
                    required
                  />
                </div>

                {/* Dress Condition */}
                <div className="flex flex-col">
                  <label
                    htmlFor="dressCondition"
                    className="ml-1 text-darkbrown"
                  >
                    Condition of Dress
                  </label>
                  <select
                    name="dressCondition"
                    id="dressCondition"
                    value={dressCondition}
                    onChange={(e) => setDressCondition(e.target.value)}
                    className="bg-white p-2 rounded-lg placeholder:text-base"
                    required
                  >
                    <option value="" disabled>
                      Select condition
                    </option>
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="flex flex-col">
                  <label htmlFor="priceRange" className="ml-1 text-darkbrown">
                    Price Range
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      name="minPrice"
                      id="minPrice"
                      placeholder="Min Price"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({ ...priceRange, min: e.target.value })
                      }
                      className="bg-white p-2 rounded-lg placeholder:text-base w-1/2"
                      required
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      id="maxPrice"
                      placeholder="Max Price"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({ ...priceRange, max: e.target.value })
                      }
                      className="bg-white p-2 rounded-lg placeholder:text-base w-1/2"
                      required
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div className="flex flex-col">
                  <label htmlFor="imageUpload" className="ml-1 text-darkbrown">
                    Upload Product Image
                  </label>
                  <input
                    type="file"
                    name="imageUpload"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="bg-white p-2 rounded-lg placeholder:text-base"
                    required
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <input
                  type="submit"
                  value="Display Product"
                  className="mt-5 bg-brown w-max self-center p-3 px-8 text-cream rounded-lg hover:bg-darkbrown cursor-pointer"
                />
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Commission and Fees Modal */}
      {showCommissionModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-cream p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold text-darkbrown mb-4">
              Commission and Fees
            </h2>
            <p className="text-darkbrown">
              Here are the details about our commission and fees:
            </p>
            <ul className="list-disc list-inside mt-4 text-darkbrown">
              <li>We charge a 10% commission on every sale.</li>
              <li>There are no upfront fees for listing your products.</li>
              <li>Shipping costs are covered by the buyer.</li>
              <li>Payments are processed securely and paid out weekly.</li>
            </ul>
            <button
              onClick={() => setShowCommissionModal(false)}
              className="mt-5 bg-brown w-max self-center p-3 px-8 text-cream rounded-lg hover:bg-darkbrown cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeASellerLayout;
