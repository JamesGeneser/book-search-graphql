const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    console.log("Connected to mongodb atlas").catch((error) => {
      console.log("error", error);
    })
  );

module.exports = mongoose.connection;
