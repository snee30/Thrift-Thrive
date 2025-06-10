import { uploadImage } from "../lib/cloudinary.js";
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
