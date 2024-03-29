const mongoose = require("mongoose");

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  if (!process.env.DB_URL) return process.exit(1);
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
