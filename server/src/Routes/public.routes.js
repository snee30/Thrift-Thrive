import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from "../Controller/public.controller.js";

const router = Router();

router.get("/all-products", getAllProducts);
router.get("/product/:productId", getProductById);
router.get("/category/:category", getProductsByCategory);

export default router;
// This code defines a public route for fetching all products from the database.
