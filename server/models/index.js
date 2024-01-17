const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
