const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const users = await User.find({});
  if (!users) return res.status(404).json({ message: "No users found" });
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const userID = req.params.id;
  const user = await User.findById(userID);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

router.post("/createUser", async (req, res) => {
  const { username, password, fullName } = req.body;

  // Check if the username already exists
  const userExists = await User.findOne({ username });
  if (userExists)
    return res.status(400).json({ message: "Username already exists" });

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = await User.create({ username, hashedPassword, fullName });
  res.status(201).json(newUser);
});

module.exports = router;
