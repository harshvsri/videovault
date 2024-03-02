const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.DB_URL);

  // Once the connection is open, log a message to the console
  mongoose.connection.once("open", () => console.log("Connected to MongoDB"));
};

module.exports = connectDB;
