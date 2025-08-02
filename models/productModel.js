import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    desc: String,
    category: {
      type: String,
      enum: ["hot", "cold", "iced"], // restrict to valid categories
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
