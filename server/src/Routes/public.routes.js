import { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../Controller/public.controller.js";

const router = Router();

router.get("/all-products", getAllProducts);
router.get("/product/:productId", getProductById);

export default router;
// This code defines a public route for fetching all products from the database.
