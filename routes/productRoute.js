import { showProducts, deleteProduct, updateProduct, createProduct,showAllProducts} from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/category/:category", showProducts);

router.get("/showproducts", showAllProducts); // Add this route

router.delete("/deleteproduct/:id",deleteProduct)
router.patch("/updateproduct/:id",updateProduct)
router.post("/createproduct",createProduct)
export default router;
