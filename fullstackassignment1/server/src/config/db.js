import mongoose from "mongoose";

export async function connectDB(uri) {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}