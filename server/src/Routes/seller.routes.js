import { Router } from "express";
import { isSeller } from "../Middleware/auth.middle.js";
import {
  addProduct,
  getPendingStatus,
  getProductStatus,
  getSoldProducts,
  updateProductStatus,
} from "../Controller/seller.controller.js";

const router = Router();

router.use(isSeller);
router.post("/add-product", addProduct);

router.get("/product-status", getProductStatus);
router.post("/update-status/:productId", updateProductStatus);

router.get("/products/pending", getPendingStatus);
router.get("/products/sold", getSoldProducts);

export default router;
