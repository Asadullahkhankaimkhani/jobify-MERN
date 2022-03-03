import mongoose from "mongoose";

export const dbConnection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("#### DATABASE CONNECTED ####");
  } catch (err) {
    console.log(err);
  }
};
