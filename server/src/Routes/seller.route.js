import { Router } from "express";
import { isSeller } from "../Middleware/auth.middle.js";

const router = Router();

router.use(isSeller);

router.post("/add-product");

export default router;
