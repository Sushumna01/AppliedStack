
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const protect = (req, res, next) => {
  try {
    // 1. Get Authorization header
    const authHeader = req.headers.authorization;

    // 2. Check whether token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new AppError("Please login to access this resource", 401));
    }

    // 3. Extract token
    const token = authHeader.split(" ")[1];

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Store user ID in request
    req.user = { id: decoded.id };

    // 6. Continue to next middleware/controller
    next();

  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }
};

module.exports = {
    protect
};