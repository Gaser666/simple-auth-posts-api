import mongoose from "mongoose";
export const dbConnection = mongoose.connect("mongodb://localhost:27017/ExpressProject").then(() => { console.log("Database connected successfully") }).catch((err) => {
    console.error("Database connection error:", err);
});