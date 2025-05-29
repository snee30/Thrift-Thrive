import Product from "../Models/porductModel";

export const addProduct = async (req, res) => {
  try {
    const { name, type, price, condition, negotiable, productImage } = req.body;

    // Validate the request body
    if (!name || !type || !price || !condition || !productImage) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const product = new Product({
      seller: req.seller._id,
      name,
      type,
      price,
      condition,
      negotiable,
      productImage,
    });

    res.status(200).json({
      success: true,
      message: "Successfully Added the Product",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};
