const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
});

const Details = mongoose.model("Details", docSchema);

module.exports = Details;
