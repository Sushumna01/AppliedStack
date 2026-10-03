require("dotenv").config();
const errorMiddleware = require("./middleware/errorMiddleware");
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api", applicationRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/auth/test", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Authentication successful",
    userId: req.user.id
  });
});

app.use(errorMiddleware);

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});