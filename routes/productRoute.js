import { showProducts, deleteProduct, updateProduct, createProduct } from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/showproducts", showProducts);
router.delete("/deleteproduct/:id",deleteProduct)
router.patch("/updateproduct/:id",updateProduct)
router.post("/createproduct",createProduct)
export default router;
