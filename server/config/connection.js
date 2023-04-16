const mongoose = require("mongoose");
const { path } = require("../models/Book");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("Connected to mongodb atlas"));

module.exports = mongoose.connection;
