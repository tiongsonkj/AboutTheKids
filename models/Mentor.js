// require mongoose with its Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    num_students: {
        type: Number
    },
    contact_num: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// exporting Mentor.js with model name 'mentor', with MentorSchema
module.exports = Mentor = mongoose.model('mentor', MentorSchema)