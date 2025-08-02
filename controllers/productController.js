import productModel from "../models/productModel.js";

// GET all products or by category if provided
const showProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const products = await productModel.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Something went wrong" });
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

export { showProducts, createProduct, updateProduct, deleteProduct };
