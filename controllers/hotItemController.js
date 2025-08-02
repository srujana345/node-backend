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

export const deleteHotItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await hotItemModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Hot item deleted", result });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete hot item", details: err });
  }
};
export const updateHotItem = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await hotItemModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json({ message: "Hot item updated", result });
  } catch (err) {
    res.status(500).json({ error: "Failed to update hot item", details: err });
  }
};

