import Product from "../Models/productModel.js";

// Get all approved products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({
      status: "approved",
    }).select("name price productImages category condition negotiable");

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.productId,
      status: "approved",
    }).select(
      "name price description productImages category condition negotiable"
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    console.error(`Error fetching product: ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
