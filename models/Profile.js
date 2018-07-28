const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ProfileSchema = new Schema({
    mentor: {
        type: Schema.Types.ObjectId,
        ref: 'mentors'
    },
    bio: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    ext_activities: {
        type: [String],
        required: true
    },  
    students: [ //may need to match the student's data
        {
            first_name: {
                type: String
            },
            last_name: {
                type: String
            },
            grad_year: {
                type: String
            },
            email: {
                type: String
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);