import express from "express";
import { addHotItem, getHotItems } from "../controllers/hotItemController.js";

const router = express.Router();

router.post("/", addHotItem);
router.get("/", getHotItems);

export default router;
