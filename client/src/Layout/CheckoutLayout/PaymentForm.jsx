import { useEffect, useRef, useState } from "react";
import useCartStore from "../../GlobalState/useCartStore";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ closeModal, price }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const { checkout } = useCartStore();

  // 🧠 State to store input values
  const [formData, setFormData] = useState({
    delivery_location: "",
    buyer_phone: "",
    transactionId: "",
  });

  // ✨ Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeModal]);

  // 🛒 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = checkout(formData);

    if (res) {
      navigate("/buyer/orders");
    }
  };

  // 🔄 Update formData on input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pt-31">
      <div
        ref={formRef}
        className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg h-150 overflow-auto"
      >
        <h2 className="text-lg font-semibold mb-4">Confirm Order & Payment</h2>

        <label className="block mb-2">Delivery Location</label>
        <input
          type="text"
          name="delivery_location"
          value={formData.delivery_location}
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
        />

        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="buyer_phone"
          value={formData.buyer_phone}
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
        />

        <label className="block mb-2 text-center">Scan to Pay</label>
        <img
          src="/payment-qr.png"
          alt="QR Code"
          className="mx-auto w-40 h-40 mb-4"
        />

        <label className="block mb-2">Transaction ID</label>
        <input
          type="text"
          name="transactionId"
          value={formData.transactionId}
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
        />

        <p>Total Amount: {price}</p>

        <button
          className="btn btn-secondary w-full mt-4"
          onClick={handleSubmit}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
