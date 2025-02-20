import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_MENU, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Connected (Menu Service)");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;