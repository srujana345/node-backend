import express from "express";
import {
  addIcedItem,
  getIcedItems,
  updateIcedItem,
  deleteIcedItem,
} from "../controllers/icedItemController.js";

const router = express.Router();

router.post("/", addIcedItem);        
router.get("/", getIcedItems);        
router.put("/:id", updateIcedItem);  
router.delete("/:id", deleteIcedItem);

export default router;
