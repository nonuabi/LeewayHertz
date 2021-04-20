//rerquird libery
const mongoose = require("mongoose");
//connect to db
mongoose.connect("mongodb://localhost/round2_assignment");
//acquire the connection (to check if is successfull)
const dp = mongoose.connection;
//error
dp.on("error", console.error.bind(console, "connection error in dp"));

//up and running then print this message.
dp.once("open", function () {
  console.log("successfully connected to the database.");
});
