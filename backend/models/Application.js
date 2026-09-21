const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    applicationDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        required: true
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
        type: String
    },

    notes: {
        type: String
    }

});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;