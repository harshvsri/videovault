var MongoStore = require("connect-mongo");

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
};

module.exports = sessionOptions;
