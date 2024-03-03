function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
}

module.exports = isAuthenticated;
