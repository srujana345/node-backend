import express from "express";
import { getColdItems, addColdItem ,deleteColdItem,
  updateColdItem,} from "../controllers/coldItemController.js";

const router = express.Router();

router.get("/", getColdItems);
router.post("/", addColdItem); 
router.delete("/:id", deleteColdItem);
router.put("/:id", updateColdItem);

export default router;
