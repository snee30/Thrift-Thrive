import { Router } from "express";
import { signup, login } from "../Controller/buyerAuth.controller.js"; // Import both functions

const router = Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

export default router;
