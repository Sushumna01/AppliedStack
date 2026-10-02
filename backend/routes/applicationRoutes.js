const express = require("express");
const router = express.Router();
const validateObjectId = require("../middleware/validateObjectId");
const {
    createApplication,
    getApplications,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationController");

router.post("/applications", createApplication);
router.get("/applications", getApplications);
router.put("/applications/:id", validateObjectId, updateApplication);
router.delete("/applications/:id", validateObjectId, deleteApplication);
router.patch("/applications/:id", validateObjectId, updateApplication);
module.exports = router;