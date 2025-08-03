import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    desc: String,
    category: {
      type: String,
      enum: ["Hot", "Cold", "Iced"], 
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
