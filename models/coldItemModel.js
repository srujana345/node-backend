import mongoose from "mongoose";

const coldItemSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    desc: String,
  },
  { timestamps: true }
);

export default mongoose.model("ColdItem", coldItemSchema);
