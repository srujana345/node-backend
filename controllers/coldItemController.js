import ColdItem from "../models/coldItemModel.js";

export const getColdItems = async (req, res) => {
  try {
    const items = await ColdItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cold items" });
  }
};
export const addColdItem = async (req, res) => {
  try {
    const { name, image, price, desc } = req.body;
    const newItem = new ColdItem({ name, image, price, desc });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to add cold item" });
  }
};
