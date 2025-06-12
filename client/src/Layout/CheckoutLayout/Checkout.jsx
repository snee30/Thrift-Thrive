import useCartStore from "../../GlobalState/useCartStore";

const Checkout = () => {
  const { cartItems } = useCartStore();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);
  return (
    <div className="pt-31 px-5">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <div>The Cart is Empty</div>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="bg-gray-300 w-70 flex justify-around">
            <img src={item.image} alt={item.name} className="size-10" />
            <h1>{item.name}</h1>
            <p>{item.price}</p>
          </div>
        ))
      )}

      <p>Total Amount: {subtotal}</p>
      <p>Proceed towards payment</p>
    </div>
  );
};
export default Checkout;
