import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connectDB = (url) => {
  // mongoose.connect() return a promise
  return mongoose.connect(url);
};

export default connectDB;
