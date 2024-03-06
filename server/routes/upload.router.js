const router = require("express").Router();
const User = require("../models/User.model");
const Upload = require("../models/Upload.model");
const isAuthenticated = require("../middlewares/isAuth.middleware");
const upload = require("../configs/multer.config");

/**
 * @route GET /uploads
 * @access Private
 * @desc Fetch all uploads for homepage
 */
router.get("/", isAuthenticated, async (req, res) => {
  const uploads = await Upload.find({});
  if (!uploads || uploads.length === 0)
    return res.status(404).json({ message: "No uploads found" });
  res.status(200).json(uploads);
});

/**
 * @route GET /uploads/:id
 * @access Private
 * @desc Fetch a specific upload by ID
 */
router.get("/:id", async (req, res) => {
  const uploadID = req.params.id;
  const upload = await Upload.findById(uploadID);
  if (!upload) return res.status(404).json({ message: "Upload not found" });
  res.status(200).json(upload);
});

/**
 * @route POST /uploads/upload
 * @access Private
 * @desc Create a new upload
 */
router.post(
  "/upload",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  async (req, res) => {
    // Get the file details from the request object
    const userID = req.user._id;
    const { title, description } = req.body;
    const videoURL = req.files.video[0].path;
    const thumbnailURL = req.files.thumbnail[0].path;

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
  }
);

module.exports = router;
