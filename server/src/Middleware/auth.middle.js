// checks if the user is logged in (authentication).
// Often used to protect routes like: “Only logged-in users can see orders.”
import jwt from "jsonwebtoken";
import Buyer from "../Models/buyerModel.js";

export const isAuth = async (req, res, next) => {
  try {
    // Grab the token cookie from the user
    const token = req.cookies.jwt;

    // Condition if there is no token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized - No token provided",
      });
    }

    // ========== Verify a token ===========
    const decode = jwt.verify(token, process.env.JWTSECRET);

    // Condition if the token cannot be verified
    if (!decode) {
      return res.status(401).json({
        success: false,
        message: "Not authorized - Invalid Token",
      });
    }

    let currentUser;

    if (decode.role === "buyer") {
      const currentBuyer = await Buyer.findById(decode.id);
      req.user = {
        _id: currentBuyer._id,
        name: currentBuyer.name,
        email: currentBuyer.email,
        phone: currentBuyer.phone,
      };
      req.role = "buyer";
    }

    next();
  } catch (err) {
    console.log(`Error in auth middleware: ${err}`);
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: "Not authorized - Invalid token",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
};
