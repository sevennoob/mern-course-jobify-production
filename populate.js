import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // await Job.deleteMany();

    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log("Success!!!!");
    // 0表示没有任何类型的故障结束进程
    process.exit(0);
  } catch (error) {
    console.log(error);
    // 1表示由于某种故障而结束进程
    process.exit(1);
  }
};

start();
