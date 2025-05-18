// define URL paths like /login, /signup, and what functions should run when someone visits those URLs.import express from "express";

import { login, signup } from "../Controller/buyerAuth.controller.js";
import signupSeller from "../Controller/sellerAuth.controller.js";
import { isAuth } from "../Middleware/auth.middle.js";

const router = express.Router();

router.post("/buyer/signup", signup);
router.post("/buyer/login", login);

router.post("/seller/signup", signupSeller);

router.get("/me", isAuth, async (req, res) => {
  try {
    if (!req.user || !req.role) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please log in.",
      });
    }
    if (req.role === "buyer") {
      res.status(200).json({
        success: true,
        buyer: req.user,
        role: req.role,
      });
    }
  } catch (error) {
    console.error("Error in /api/auth/me:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;
