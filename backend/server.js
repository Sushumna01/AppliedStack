require("dotenv").config();

const Application = require("./models/Application");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
        console.log("MongoDB connection failed:", err);
    });

app.get("/", (req, res) => {
    res.send("AppliedStack backend is running!");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "AppliedStack API is working!"
    });
});

app.post("/api/applications", async (req, res) => {

    try {

        const application = await Application.create(req.body);

        res.status(201).json({
            message: "Application created successfully!",
            application: application
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to create application",
            error: error.message
        });

    }

});

app.get("/api/applications", async (req, res) => {

    try {

        const applications = await Application.find();

        res.json({
            applications: applications
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch applications",
            error: error.message
        });

    }

});

app.put("/api/applications/:id", async (req, res) => {

    try {

        const application = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.json({
            message: "Application updated successfully!",
            application: application
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to update application",
            error: error.message
        });

    }

});

app.delete("/api/applications/:id", async (req, res) => {

    try {

        const application = await Application.findByIdAndDelete(
            req.params.id
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.json({
            message: "Application deleted successfully!"
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to delete application",
            error: error.message
        });

    }

});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});