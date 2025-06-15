import { Router } from "express";
import { isSeller } from "../Middleware/auth.middle.js";
import {
  addProduct,
  getProductStatus,
} from "../Controller/seller.controller.js";

const router = Router();

router.use(isSeller);
router.post("/add-product", addProduct);

router.get("/product-status", getProductStatus);

export default router;
