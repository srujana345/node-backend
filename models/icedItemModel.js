import mongoose from "mongoose";

const icedItemSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    desc: String,
  },
  { timestamps: true }
);

export default mongoose.model("IcedItem", icedItemSchema);
