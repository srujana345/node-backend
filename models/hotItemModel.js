import mongoose from "mongoose";

const hotItemSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("HotItem", hotItemSchema);
