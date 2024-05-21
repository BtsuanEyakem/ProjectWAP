// middleware/authMiddleware.js
const User = require('../models/user');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token && User.getSession(token)) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;
