// define URL paths like /login, /signup, and what functions should run when someone visits those URLs.import express from "express";

import { Router } from "express";
import { getGroupedOrders } from "../Controller/buyer.controller.js";

const router = Router();

router.get("/orders", getGroupedOrders);

export default router;
