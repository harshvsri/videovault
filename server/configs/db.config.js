const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.DB_URL);
  mongoose.connection.once("open", () => console.log("Connected to MongoDB"));
};

module.exports = connectDB;
