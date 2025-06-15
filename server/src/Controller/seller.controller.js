import { uploadImage } from "../lib/cloudinary.js";
import OrderItem from "../Models/orderItem.js";
import Payment from "../Models/paymentModel.js";
import Product from "../Models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      description,
      condition,
      negotiable,
      productImages,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !category ||
      !price ||
      !condition ||
      !productImages ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const uploadedImages = await Promise.all(
      productImages.map(async (img) => await uploadImage(img))
    );
    // Create new product
    const newProduct = {
      seller: req.seller._id,
      name,
      category,
      price,
      condition,
      description,
      negotiable,
      productImages: uploadedImages,
    };

    // Save product to database
    const product = await Product.create(newProduct);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error(`Error adding product: ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getProductStatus = async (req, res) => {
  try {
    const sellerId = req.seller?._id || ""; // or get from token/middleware

    if (!sellerId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Seller info missing",
      });
    }

    // Step 1: Get all products of this seller
    const products = await Product.find({
      seller: sellerId,
      status: "approved",
    });

    const productIds = products.map((p) => p._id);

    // Step 2: Get orderItems of those products
    const orderItems = await OrderItem.find({ product: { $in: productIds } });

    // Step 3: Create a map from productId to orderItem
    const productToOrderItemMap = {};
    const orderIdsSet = new Set();

    orderItems.forEach((item) => {
      productToOrderItemMap[item.product.toString()] = item;
      orderIdsSet.add(item.order.toString());
    });

    // Step 4: Get payments for those orders
    const payments = await Payment.find({
      order: { $in: Array.from(orderIdsSet) },
    });

    // Step 5: Create a map of orderId to payment status
    const orderToPaymentStatusMap = {};
    payments.forEach((payment) => {
      orderToPaymentStatusMap[payment.order.toString()] = payment.status;
    });

    // Step 6: Combine all data into final response
    const response = products.map((product) => {
      const orderItem = productToOrderItemMap[product._id.toString()];
      if (!orderItem) {
        return {
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.productImages?.[0]?.url || null,
          status: "available",
        };
      }

      const paymentStatus = orderToPaymentStatusMap[orderItem.order.toString()];
      const status = paymentStatus === "paid" ? "booked" : "pending payment";

      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.productImages?.[0]?.url || null,
        status,
      };
    });

    res.status(200).json({ success: true, products: response });
  } catch (error) {
    console.error("Error fetching seller products:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
