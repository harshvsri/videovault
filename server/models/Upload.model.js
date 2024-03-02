const mongoose = require("mongoose");
const User = require("./User.model");

const uploadSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  title: { type: String, required: true, min: 3, max: 50 },
  description: { type: String, required: true, min: 3, max: 500 },
  img: { type: String, required: true },
  likes: { type: Array, default: [] },
  comments: { type: Array, default: [] },
});

const Upload = mongoose.model("Upload", uploadSchema);
module.exports = Upload;
