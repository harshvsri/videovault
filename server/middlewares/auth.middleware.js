const passport = require("passport");

function authenticate(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(info);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Login successful", user: user });
    });
  })(req, res, next);
}

module.exports = authenticate;
