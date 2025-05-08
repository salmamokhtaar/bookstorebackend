
const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

const {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/users", verifyToken, isAdmin, getUsers); // Admin only
router.get("/users/:id", verifyToken, getUserById);
router.put("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, isAdmin, deleteUser); // Admin only

module.exports = router;