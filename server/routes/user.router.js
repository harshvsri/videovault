const router = require("express").Router();
const isAuthenticated = require("../middlewares/isAuth.middleware");
const User = require("../models/User.model");

router.get("/", isAuthenticated, async (req, res) => {
  const users = await User.find({});
  if (!users || users.length === 0)
    return res.status(404).json({ message: "No users found" });
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const userID = req.params.id;
  const user = await User.findById(userID).populate("uploads");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

module.exports = router;
