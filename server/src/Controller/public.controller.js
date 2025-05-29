import Product from "../Models/porductModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({
      approved: true,
    }).select("name price productImage category condition negotiable");
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
