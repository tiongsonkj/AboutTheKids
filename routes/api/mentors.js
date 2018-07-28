// bring in requirements
const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const gravatar = require('gravatar');

// load in validations
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// load model
const Mentor = require('../../models/Mentor');

// @route   POST api/mentors/register
// @desc    register mentor
// @access  Public
router.post("/register", (req, res) => {
     // pull out errors and isvalid from function we just brought in
     const { errors, isValid } = validateRegisterInput(req.body);
     console.log(req.body);

    // check validation
    if(!isValid) {
        return res.status(400).json({ errors });
    }

    Mentor.findOne({ email: req.body.email })
        .then(mentor => {
            if(mentor) {
                // if mentor exists, send error
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                // create gravatar
                const avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });

                // else create new Mentor
                const newMentor = new Mentor({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password,
                    school: req.body.school
                });

                // encrypting our password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newMentor.password, salt, (err, hash) => {
                        if(err) throw err;

                        // setting newmentor password to hash, hash is what we want
                        newMentor.password = hash;
                        newMentor.save()
                            .then(mentor => res.json(mentor)) //send back successful response of user
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
    // pull out errors and isvalid from function we just brought in
    const { errors, isValid } = validateLoginInput(req.body);

    // check validation
    if(!isValid) {
        return res.status(400).json({ errors });
    }

    const email = req.body.email;
    const password = req.body.password;

    Mentor.findOne({email})
        .then(mentor => {
            console.log(email);
            console.log(password);
            console.log(typeof password);

            if(!mentor) {
                return res.status(404).json({error: "Mentor not found"});
            }

            // check password
            bcrypt.compare(password, mentor.password)
                .then(isMatch => {
                    console.log(isMatch);
                    if(isMatch) {
                        // res.json({msg: 'Success'});

                        // user matched
                        
                        //create jwt payload
                        const payload = { 
                            id: mentor.id, 
                            first_name: mentor.first_name, 
                            last_name: mentor.last_name,
                            avatar: mentor.avatar
                        } 

                        // implement jwt at a later time
                        // sign token
                        // payload is what we want to include in the token
                        // third parameter is time the key expires
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

// @route   GET api/mentors/current
// @desc    Return current mentor
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email
    });
});
module.exports = router;