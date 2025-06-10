import { Router } from "express";
import { isSeller } from "../Middleware/auth.middle.js";
import { addProduct } from "../Controller/seller.controller.js";

const router = Router();

router.use(isSeller);
router.post("/add-product", addProduct);

export default router;
