const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// load config
dotenv.config({path: './config/config.env'});

// load DBB*
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
