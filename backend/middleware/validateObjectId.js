const mongoose = require("mongoose");
const AppError = require("../utils/AppError");

const validateObjectId = (req, res, next) => {

    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        return next(new AppError("Invalid Application ID", 400));
    }

    next();
};

module.exports = validateObjectId;