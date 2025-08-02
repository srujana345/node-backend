import express from "express";
import { addHotItem, getHotItems, deleteHotItem, updateHotItem } from "../controllers/hotItemController.js";

const router = express.Router();

router.post("/", addHotItem);
router.get("/", getHotItems);
router.delete("/:id", deleteHotItem);
router.put("/:id", updateHotItem);

export default router;
