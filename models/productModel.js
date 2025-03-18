import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: String },
    price: { type: Number, required: true },
    image: { type: Array, required: true }, // Array of image URLs
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    fabric: { type: String },
    material: { type: String },
    note: { type: String },
    date: { type: Number, required: true }, // Timestamp
    bestseller: { type: Boolean }
});

const productModel =mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
