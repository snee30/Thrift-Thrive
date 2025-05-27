import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
      required: true,
    },

    delivery_status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    delivery_location: {
      type: String,
      required: true,
    },

    buyer_phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
