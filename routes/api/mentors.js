// bring in requirements
const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');

// load model
const Mentor = require('../../models/Mentor');

// @route   POST api/mentors/register
// @desc    register mentor
// @access  Public
router.post("/register", (req, res) => {

    Mentor.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                // if mentor exists, send error
                return res.status(400).json({ error: 'Email already exists' });
            } else {
                // else create new Mentor
                const newMentor = new Mentor({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: req.body.password,
                    school: req.body.school
                });

                newMentor.save()
                        .then(mentor => res.json(mentor))
                        .catch(err => console.log(err));
            }
        });
});

// @route   GET api/mentors/all
// @desc    all mentors
// @access  Public
router.get('/all', (req, res) => {
    Mentor.find()
        .populate('mentors') //populate by mentor, need to read up on this, or test it out on POSTMAN
        .then(mentors => {
            console.log(mentors);
        });
})


module.exports = router;