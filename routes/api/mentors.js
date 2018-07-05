// bring in requirements
const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const bcrypt = require('bcryptjs');

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

                // encrypting our password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newMentor.password, salt, (err, hash) => {
                        if(err) throw err;

                        // setting newUser password to hash, hash is what we want
                        newMentor.password = hash;
                        newMentor.save()
                            .then(user => res.json(user)) //send back successful response of user
                            .catch(err => console.log(err));
                    })
                })
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
            console.log("Here is list of mentors");
            console.log("=========================")
            console.log(mentors);
        });
})

// @route   POST api/mentors/login
// @desc    login mentor
// @access  Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Mentor.findOne({email})
        .then(mentor => {
            console.log(email);
            console.log(password);
            console.log(typeof password);

            if(!mentor) {
                return res.status(404).json({error: "User not found"});
            }

            // check password
            bcrypt.compare(password, mentor.password)
                .then(isMatch => {
                    console.log(isMatch);
                    if(isMatch) {
                        // res.json({msg: 'Success'});

                        // user matched
                        
                        const payload = { id: user.id, name: user.name, avatar: user.avatar } //create jwt payload

                        // sign token
                        // payload is what we want to include in the token
                        // third parameter is time the key expires (ep 12)
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            { expiresIn: 3600 }, 
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({error: "Password incorrect"});
                    }
                });
        });
});
module.exports = router;