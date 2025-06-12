import { Router } from "express";
import { isAdmin } from "../Middleware/auth.middle.js";
import {
  getProductByIdAdmin,
  getUnapprovedProducts,
  respondProducts,
} from "../Controller/admin.controller.js";

const router = Router();

router.use(isAdmin);

router.get("/products/unapproved", getUnapprovedProducts);
router.get("/product/:productId", getProductByIdAdmin);
router.post("/product/respond/:productId", respondProducts);

export default router;
