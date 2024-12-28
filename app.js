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
const path = require("path");

// load config
dotenv.config({ path: "./config/config.env" });

//Passport Config
require("./config/passport")(passport);

// load DBB*
connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
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

//Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
