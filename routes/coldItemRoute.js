import express from "express";
import { getColdItems, addColdItem } from "../controllers/coldItemController.js";

const router = express.Router();

router.get("/", getColdItems);
router.post("/", addColdItem); 

export default router;
