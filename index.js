const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assests"));

app.get("/", function (req, res) {
  return res.render("home");
});

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server : ${err}`);
    return;
  }
  console.log(`Server is running on port : ${port}`);
});
