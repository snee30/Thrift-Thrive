// define URL paths like /login, /signup, and what functions should run when someone visits those URLs.import express from "express";

import { Router } from "express";
import { isAuth } from "../Middleware/auth.middle.js";
import {
  adminLogin,
  adminRegister,
  buyerLogin,
  buyerSignup,
  checkAuth,
  sellerLogin,
  sellerSignup,
} from "../Controller/auth.controller.js";

const router = Router();

router.post("/buyer/signup", buyerSignup);
router.post("/buyer/login", buyerLogin);

router.post("/seller/signup", sellerSignup);
router.post("/seller/login", sellerLogin);

router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);

router.get("/me", isAuth, checkAuth);

export default router;
