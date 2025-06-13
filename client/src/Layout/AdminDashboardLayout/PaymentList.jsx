import { useEffect } from "react";
import { useAdminStore } from "../../GlobalState/useAdminStore";

export default function PaymentList() {
  const { pendingPayments, getPendingPayments } = useAdminStore();

  useEffect(() => {
    getPendingPayments();
  }, [getPendingPayments]);

  return (
    <div className="grid gap-4">
      {pendingPayments.length === 0 ? (
        <div>No Pending Payments</div>
      ) : (
        pendingPayments.map((payment) => (
          <PaymentCard key={payment._id} payment={payment} />
        ))
      )}
    </div>
  );
}

function PaymentCard({ payment }) {
  const { acceptPayment, loadingPaymentAccept } = useAdminStore();

  const handleAcceptPayment = () => {
    acceptPayment(payment._id);
  };

  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">
          Payment By: <span className="font-medium">{payment.name}</span>
        </span>
      </div>

      <div className="text-gray-800 text-lg font-semibold">
        Rs. {payment.amount.toLocaleString()}
      </div>

      <div className="text-sm text-gray-600 mt-1">
        Method: {payment.method} <br />
        Txn ID: <span className="font-mono">{payment.transactionId}</span>{" "}
        <br />
        Paid At: {new Date(payment.paid_at).toLocaleString()}
      </div>

      <div className="mt-3 flex justify-end">
        <button
          className={`bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 ${
            loadingPaymentAccept ? "cursor-not-allowed" : ""
          }`}
          onClick={handleAcceptPayment}
        >
          Accept Payment
        </button>
      </div>
    </div>
  );
}
