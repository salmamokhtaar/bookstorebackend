const Book = require("../model/bookModel");

exports.uploadBook = async (req, res) => {
  try {
    const data = req.body;
    const result = await Book.create(data);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateBook = req.body;
    const result = await Book.findByIdAndUpdate(id, updateBook, { new: true });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getBookByCategory = async (req, res) => {
  try {
    const category = req.query.category;
    const books = await Book.find({ bookCategory: category });
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
