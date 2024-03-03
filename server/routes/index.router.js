const router = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/User.model");
const authenticate = require("../middlewares/auth.middleware");

router.post("/register", async (req, res, next) => {
  const { username, password, fullName } = req.body;

  // Check if the username already exists
  const userExists = await User.findOne({ username: username });
  if (userExists)
    return res.status(400).json({ message: "Username already exists" });

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    password: hashedPassword,
    fullName,
  });
  res.status(201).json({ message: "User created", user: newUser });
});

router.post("/login", authenticate);

router.get("/logout", (req, res) => {
  req.logOut(() => res.status(200).json({ message: "Logout successful" }));
});

module.exports = router;
