import { Router } from "express";
import { isAdmin } from "../Middleware/auth.middle.js";
import {
  approveProducts,
  getUnapprovedProducts,
} from "../Controller/admin.controller.js";

const router = Router();

router.use(isAdmin);

router.get("/products/unapproved", getUnapprovedProducts);
router.post("/product/approve/:productId", approveProducts);

export default router;
