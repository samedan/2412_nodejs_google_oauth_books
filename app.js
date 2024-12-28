const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan"); // for login
const exphbs = require("express-handlebars");
const passport = require("passport");
// Store Auth in SESSION
const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
// END Store Auth in SESSION
// Allow PUT request
const methodOverride = require("method-override");
const path = require("path");

// load config
dotenv.config({ path: "./config/config.env" });

//Passport Config
require("./config/passport")(passport);

// load DBB*
connectDB();

const app = express();

// BodyParser Midddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method Override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Helper functions
const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  selectOption,
} = require("./helpers/hbs");

// Handlebars
app.engine(
  ".hbs",
  exphbs.engine({
    helpers: { formatDate, stripTags, truncate, editIcon, selectOption },
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// SESSION middleware
app.use(
  session({
    secret: "tomshardware",
    resave: false, // no saved session if nothing is modified
    saveUninitialized: false, // dont create session until smth is stored
    // cookie: {secure: true}, // needs HTTPS
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set Global Variable middleware
app.use(function (req, res, next) {
  res.locals.authedInUser = req.user || null;
  next();
});

//Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
