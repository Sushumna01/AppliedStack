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

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});