const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  bookCategory: { type: String, required: true },
  bookDescription: { type: String, required: true },
  bookPdfUrl: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
