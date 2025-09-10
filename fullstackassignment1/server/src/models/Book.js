import mongoose from "mongoose";


const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: Number, required: true },
        pages: { type: Number, required: true },
        description: { type: String, required: true, default: " " },
        coverUrl: { type: String, required: true, default: " " }
    },
    { timestamps: true }
);

export default mongoose.model("Book", BookSchema);