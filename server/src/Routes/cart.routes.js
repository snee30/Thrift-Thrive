import express from "express";
import {
  addToCart,
  removeFromCart,
  viewCart,
} from "../Controller/cart.controller.js";
import { isBuyer } from "../Middleware/auth.middle.js";

const router = express.Router();
router.use(isBuyer);

router.post("/add/:productId", addToCart);
router.get("/cart-items", viewCart);
router.delete("/remove/:productId", removeFromCart);
export default router;
