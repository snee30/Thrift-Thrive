import { useAdminStore } from "../../GlobalState/useAdminStore";
import { useEffect } from "react";

const SellerPayment = () => {
  const { getPendingSellerPayments, pendingSellerPayments, payToSeller } =
    useAdminStore();

  useEffect(() => {
    getPendingSellerPayments();
  }, [getPendingSellerPayments]);

  const payButtonHandler = (paymentId) => {
    payToSeller(paymentId);
  };

  return (
    <div className="pt-40">
      <h1>Pending Seller Payments</h1>

      <div>
        {pendingSellerPayments.length === 0 ? (
          <div>No Pending Payments to Seller</div>
        ) : (
          pendingSellerPayments.map((payment) => (
            <div
              key={payment._id}
              className="rounded-2xl bg-white p-5 shadow-md hover:shadow-lg transition-all border border-[var(--lightborder)] mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm text-gray-500">
                  Payment to:{" "}
                  <span className="text-base font-semibold text-gray-800">
                    {payment?.seller?.name}
                  </span>
                </h2>

                <div>
                  For Product: {payment?.orderItem?.product?.name}
                  <img src={payment?.orderItem?.product?.imageUrl} alt="" />
                </div>
              </div>

              <div className="text-[var(--forestgreen)] text-xl font-bold mb-1">
                Rs. {payment.amount.toLocaleString()}
              </div>

              <button onClick={() => payButtonHandler(payment._id)}>
                Pay to seller
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default SellerPayment;
