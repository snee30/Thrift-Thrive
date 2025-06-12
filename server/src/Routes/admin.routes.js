import { Router } from "express";
import { isAdmin } from "../Middleware/auth.middle.js";
import {
  approveProducts,
  getProductByIdAdmin,
  getUnapprovedProducts,
} from "../Controller/admin.controller.js";

const router = Router();

router.use(isAdmin);

router.get("/products/unapproved", getUnapprovedProducts);
router.get("/product/:productId", getProductByIdAdmin);
router.post("/product/approve/:productId", approveProducts);
router.post("/product/delete/productId");

export default router;
