import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // connection hasn't been established
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("db connected");
    }
  } catch (e) {
    console.error(e);
  }
};

export default connectDB;
