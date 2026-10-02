const Application = require("../models/Application");
const AppError = require("../utils/AppError");

const createApplication = async (req, res, next) => {
    try {
        const application = await Application.create(req.body);

        res.status(201).json(application);

    } catch (error) {
        next(error);
    }
};

const getApplications = async (req, res, next) => {
    try {
        const applications = await Application.find();

        res.status(200).json({
            applications: applications
        });

    } catch (error) {
        next(error);
    }
};

const updateApplication = async (req, res, next) => {
    try {
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!application) {
            return next(new AppError("Application not found", 404));
        }

        res.status(200).json({
            message: "Application updated successfully!",
            application: application
        });

    } catch (error) {
        next(error);
    }
};

const deleteApplication = async (req, res, next) => {
    try {
        const application = await Application.findByIdAndDelete(
            req.params.id
        );

        if (!application) {
            return next(new AppError("Application not found", 404));
        }

        res.status(200).json({
            message: "Application deleted successfully!"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createApplication,
    getApplications,
    updateApplication,
    deleteApplication
};