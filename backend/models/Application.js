
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },

    role: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },

    applicationDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        required: true,
        trim: true,
        enum: [
            "Applied",
            "Assessment",
            "Interview",
            "Selected",
            "Offer",
            "Rejected",
            "Withdrawn"
        ]
    },

    deadline: {
        type: Date
    },

    interviewDate: {
        type: Date
    },

    expectedResponseDate: {
        type: Date
    },

    jobLink: {
        type: String,
        trim: true,
        match: /^https?:\/\/.+/
    },

    notes: {
        type: String,
        trim: true,
        maxlength: 1000
    }

});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;