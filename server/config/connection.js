const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

module.exports = mongoose.connection;
