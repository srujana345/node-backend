
import productModel from "../models/productModel.js";

const showProducts = async (req, res) => {
  try {
    const { category } = req.params;
    let query = {};
    if (category) {
      query.category = category;
    }
    const products = await productModel.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
};


// POST - Create a new product
const createProduct = async (req, res) => {
  try {
    const body = req.body;
    const result = await productModel.create(body);
    res.status(201).json(result);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(400).json({ message: "Invalid product data" });
  }
};

// PUT - Update product by ID
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await productModel.findByIdAndUpdate(id, body, { new: true });
    if (!result) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(result);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(400).json({ message: "Update failed" });
  }
};

// DELETE - Remove product by ID
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productModel.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted", result });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(400).json({ message: "Delete failed" });
  }
};
// Get all products
export const showAllProducts = async (req, res) => {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all products", error });
  }
};


export { showProducts, createProduct, updateProduct, deleteProduct };
