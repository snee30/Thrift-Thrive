import Product from "../Models/productModel.js";

export async function getUnapprovedProducts(req, res) {
  try {
    const unapprovedProducts = await Product.find({
      approved: false,
    });

    res.status(200).json({
      success: true,
      products: unapprovedProducts,
    });
  } catch (error) {
    console.log("Error in admin- get all products: ", error);
    return (
      res.status(500),
      json({
        success: false,
        message: "Internal server error",
      })
    );
  }
}

export const getProductByIdAdmin = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.productId,
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

export async function approveProducts(req, res) {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    const approvedProduct = await Product.findByIdAndUpdate(
      productId,
      { approved: true },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Product Approved",
    });
  } catch (error) {
    console.log("Error in admin- Approve Products: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
