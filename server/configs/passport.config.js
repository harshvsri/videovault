const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

const strategy = new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ username: username });
  if (!user) return done(null, false, { message: "Incorrect username" });

  // Verify the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return done(null, false, { message: "Incorrect password" });

  return done(null, user);
});

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (!user) return done(null, false);
  return done(null, user);
});
