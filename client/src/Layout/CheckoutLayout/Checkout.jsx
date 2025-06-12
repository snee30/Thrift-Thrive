import { useState } from "react";
import useCartStore from "../../GlobalState/useCartStore";
import PaymentForm from "./PaymentForm"; // adjust path as needed

const Checkout = () => {
  const { cartItems } = useCartStore();
  const [showForm, setShowForm] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="pt-31 px-5 relative">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <div>The Cart is Empty</div>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 mb-2 rounded shadow flex justify-between items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="size-10 object-contain"
            />
            <h1 className="font-medium">{item.name}</h1>
            <p className="font-bold text-sm">Rs.{item.price}</p>
          </div>
        ))
      )}

      <p className="mt-4 font-semibold">Total Amount: Rs.{subtotal}</p>
      <button
        onClick={() => setShowForm(true)}
        className="mt-4 btn btn-primary"
      >
        Proceed to Payment
      </button>

      {showForm && (
        <PaymentForm closeModal={() => setShowForm(false)} price={subtotal} />
      )}
    </div>
  );
};

export default Checkout;
