import HotItem from "../models/hotItemModel.js";

export const addHotItem = async (req, res) => {
  try {
    const newItem = new HotItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getHotItems = async (req, res) => {
  try {
    const items = await HotItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
