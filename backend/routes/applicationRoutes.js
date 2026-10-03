const express = require("express");

const router = express.Router();

const validateObjectId = require("../middleware/validateObjectId");

const {
    createApplication,
    getApplications,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/applications", protect, createApplication);

router.get("/applications", protect, getApplications);

router.put("/applications/:id", protect, validateObjectId, updateApplication);

router.delete("/applications/:id", protect, validateObjectId, deleteApplication);

router.patch("/applications/:id", protect, validateObjectId, updateApplication);

module.exports = router;