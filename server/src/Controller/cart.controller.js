import cartModel from "../Models/cartModel.js";

export const addToCart = async (req, res) => {
  const { productId } = req.params;
  const buyerId = req.buyer._id; // from auth middleware

  try {
    let cart = await cartModel.findOne({ buyer: buyerId });

    if (cart) {
      // Only add if product is not already in the cart
      const alreadyInCart = cart.items.includes(productId);
      if (!alreadyInCart) {
        cart.items.push(productId);
        await cart.save();
        return res
          .status(200)
          .json({ success: true, message: "Added to cart" });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Item already in cart" });
      }
    } else {
      // No cart exists yet, create one
      cart = new cartModel({
        buyer: buyerId,
        items: [productId],
      });
      await cart.save();
      return res
        .status(200)
        .json({ success: true, message: "Added to cart", cart });
    }
  } catch (error) {
    console.error("Cart error:", error);
    res.status(500).json({ success: false, message: "Cart error", error });
  }
};

export const viewCart = async (req, res) => {
  try {
    const buyerId = req.buyer._id; // from middleware/token

    const cart = await cartModel
      .findOne({ buyer: buyerId })
      .populate("items", "name price productImages");

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart is Empty" });
    }

    // Format only first image from productImages
    const simplifiedCart = {
      ...cart._doc,
      items: cart.items.map((item) => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        image: item.productImages?.[0]?.url || null,
      })),
    };

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cart: simplifiedCart,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// Remove an item from the cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const buyerId = req.buyer._id; // from token middleware

  try {
    const cart = await cartModel.findOne({ buyer: buyerId });

    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    // Filter out the product
    cart.items = cart.items.filter((item) => item.toString() !== productId);

    await cart.save();

    res.status(200).json({ success: true, message: "Item removed from cart" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error removing item", error });
  }
};
