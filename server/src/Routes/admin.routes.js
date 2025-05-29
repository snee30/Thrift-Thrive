import { Router } from "express";
import { isAdmin } from "../Middleware/auth.middle.js";

const router = Router();

router.use(isAdmin);

router.post("/accept-product", (req, res) => {
  return res.status(200).json({
    message: "Successfully Verified the product",
  });
});

router.post("/decline-product");
export default router;
