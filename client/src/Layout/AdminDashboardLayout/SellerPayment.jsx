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
    <div className="pt-35 px-6 bg-sage min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--forestgreen)] text-center bg-[var(--cream)] p-4 rounded-xl shadow w-max mx-auto mb-10">
        Pending Seller Payments
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {pendingSellerPayments.length === 0 ? (
          <div className="text-center text-[var(--forestgreen)] font-medium text-lg">
            No Pending Payments to Seller
          </div>
        ) : (
          pendingSellerPayments.map((payment) => (
            <div
              key={payment._id}
              className="rounded-xl bg-white p-5 shadow-md hover:shadow-lg transition-all border border-[var(--lightborder)]"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h2 className="text-gray-600 text-sm">
                    Payment to:{" "}
                    <span className="text-base font-semibold text-gray-800">
                      {payment?.seller?.name}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500">
                    For Product:{" "}
                    <span className="font-medium text-gray-700">
                      {payment?.orderItem?.product?.name}
                    </span>
                  </p>
                </div>

                {payment?.orderItem?.product?.imageUrl && (
                  <img
                    src={payment.orderItem.product.imageUrl}
                    alt="product"
                    className="w-24 h-24 object-contain rounded border"
                  />
                )}
              </div>

              <div className="text-[var(--forestgreen)] text-xl font-bold mb-4">
                Rs. {payment.amount.toLocaleString()}
              </div>

              <button
                onClick={() => payButtonHandler(payment._id)}
                className="bg-[var(--sage)] text-[var(--darkgreen)] font-semibold px-5 py-2 rounded-lg hover:bg-[var(--darksage)] transition"
              >
                Pay to Seller
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SellerPayment;
