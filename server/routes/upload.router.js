const router = require("express").Router();
const User = require("../models/User.model");
const Upload = require("../models/Upload.model");

router.get("/", async (req, res) => {
  const uploads = await Upload.find({});
  if (!uploads || uploads.length === 0)
    return res.status(404).json({ message: "No uploads found" });
  res.status(200).json(uploads);
});

router.get("/:id", async (req, res) => {
  const uploadID = req.params.id;
  const upload = await Upload.findById(uploadID);
  if (!upload) return res.status(404).json({ message: "Upload not found" });
  res.status(200).json(upload);
});

router.post("/create-upload", async (req, res) => {
  const { userID, title, description, thumbnailURL, videoURL } = req.body;
  const newUpload = await Upload.create({
    userID,
    title,
    description,
    thumbnailURL,
    videoURL,
  });

  // Update the user's uploads array
  await User.findByIdAndUpdate(userID, { $push: { uploads: newUpload._id } });
  res.status(201).json(newUpload);
});

module.exports = router;
