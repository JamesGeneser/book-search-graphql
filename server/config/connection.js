const mongoose = require("mongoose");
require("dotenv").config({ path: "../../.env" });
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("Connected to mongodb atlas"));

module.exports = mongoose.connection;
