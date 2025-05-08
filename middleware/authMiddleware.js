const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find user by id
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token. User not found.' });
        }

        // Add user to request object
        req.user = user;
        req.token = token;
        
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Admin role required.' });
    }
};

module.exports = { verifyToken, isAdmin };
