import Product from "../Models/porductModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, category, price, condition, negotiable, productImage } =
      req.body;

    // Validate required fields
    if (!name || !category || !price || !condition || !productImage) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create new product
    const newProduct = {
      seller: req.seller._id,
      name,
      category,
      price,
      condition,
      negotiable,
      productImage,
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
