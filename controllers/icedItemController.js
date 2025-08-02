import icedItemModel from "../models/icedItemModel.js";


export const addIcedItem = async (req, res) => {
  try {
    const icedItem = new icedItemModel(req.body);
    const result = await icedItem.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add iced item", details: err });
  }
};

export const getIcedItems = async (req, res) => {
  try {
    const items = await icedItemModel.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to get iced items", details: err });
  }
};
export const updateIcedItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await icedItemModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update iced item", details: err });
  }
};

export const deleteIcedItem = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await icedItemModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Iced item deleted", result });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete iced item", details: err });
  }
};
