const express = require("express");
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const {
  uploadBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBookByCategory,
  getBookById,
} = require("../controllers/bookcontroller");


// comment aded
const router = express.Router();

// Public routes - accessible to all
router.get("/all_books", getAllBooks);
router.get("/books", getBookByCategory);
router.get("/book/:id", getBookById);

// Admin only routes - require authentication and admin role
router.post("/upload_book", verifyToken, isAdmin, uploadBook);
router.patch("/book/:id", verifyToken, isAdmin, updateBook);
router.delete("/book/:id", verifyToken, isAdmin, deleteBook);

module.exports = router;
