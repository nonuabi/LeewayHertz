const express = require("express");
const path = require("path");
const port = 8000;
const dp = require("./config/mongoose");
const Details = require("./models/schema");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assests"));

app.get("/", function (req, res) {
  Details.find({}, function (err, detail) {
    if (err) {
      console.log("error in fetching the data");
      return;
    }
    return res.render("home", {
      title: "Round 2",
      doc: detail,
    });
  });
});

app.post("/create", function (req, res) {
  Details.create(
    {
      bookTitle: req.body.bookTitle,
      authorName: req.body.authorName,
    },
    function (err, newDoc) {
      if (err) {
        console.log(`eror occure in creating a doc in db ${err}`);
        return;
      }
      console.log("####  ", newDoc);
      res.redirect("back");
    }
  );
});

app.get("/fetchId", function (req, res) {
  let uniqeId = req.query.id;
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server ", err);
    return;
  }
  console.log("Express Server is running on Port: ", port);
});
