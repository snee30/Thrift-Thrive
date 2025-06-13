import { CheckCircle } from "lucide-react";

const BuyerOrder = () => {
  return (
    <div className="pt-40 flex flex-col items-center justify-center text-center px-4">
      <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
      <h1 className="text-2xl font-bold text-[#3e2723] mb-2">
        Order Confirmed!
      </h1>
      <p className="text-gray-700 mb-6 max-w-md">
        Thank you for your purchase. Your order has been successfully placed and
        will be delivered soon. You can view the status of your order in the
        Orders section.
      </p>
      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
        Estimated Delivery: 3–5 Days
      </div>
    </div>
  );
};

export default BuyerOrder;
