import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Tops",
        "Bottoms",
        "Shoes",
        "Dress",
        "Accessories",
        "Bags",
        "Others",
      ],
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    condition: {
      type: String,
      enum: ["New", "LikeNew", "Used"],
      required: true,
    },

    negotiable: {
      type: Boolean,
      default: false,
    },

    productImage: {
      type: [String],
      required: true,
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
