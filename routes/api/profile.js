// for now mentor's profile
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// load validation
const validateProfileInput = require('../../validation/profile');
// const validateExperienceInput = require('../../validation/experience');
// const validateEducationInput = require('../../validation/education');

// bringing in models
const Profile = require('../../models/Profile');
const Mentor = require('../../models/Mentor');

// @route GET request to api/profile/tests
// @desc  Tests mentor profile route
// @access Public --> this is public data
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

// @route GET request to api/profile
// @desc  Get current mentor profile
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    // console.log(req);

    // from Profile schema
    Profile.findOne({ mentor: req.user._id })
        .populate('mentors', ['name', 'avatar']) //fetches the mentor object so id, name, and avatar
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is no profile for this mentor';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route GET request to api/profile/user/:user_id
// @desc  get the profile by the id
// @access Public
router.get('/mentors/:mentor_id', (req, res) => {
    const errors = {};

    Profile.findOne({ mentor: req.params.mentor_id }) //this will grab whatever :handle is
        .populate('mentors', ['email', 'avatar'])
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }

            res.json(profile);
        }).catch(err => res.status(404).json(errors));
});

// @route POST request to api/profile
// @desc  create users profile
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // check validation
    if(!isValid) {
        // return any errors with 400 status
        return res.status(400).json(errors);
    }

    // creating the profile fields that mentor will input
    const profileFields = {};
    profileFields.mentor = req.user._id;

    // checking to see if this was sent in from the field
    if(req.body.bio) {
        profileFields.bio = req.body.bio;
    }
    if(req.body.interests) {
        profileFields.interests = req.body.interests;
    }
    if(req.body.ext_activities) {
        profileFields.ext_activities = req.body.ext_activities;
    }

    // look for user
    Profile.findOne({ mentor: req.user._id })
        .then(profile => {
            // if profile exists...
            if(profile) {
                Profile.findOneAndUpdate(
                    { mentor: req.user._id },
                    { $set: profileFields },
                    { new: true}
                ).then(profile => res.json(profile));
            } else {
                // create profile
                new Profile(profileFields).save().then(profile => res.json(profile));
            }
        });
});

// @route POST request to api/profile/extactivity
// @desc  add ext activity to profile
// @access Private because we need actual user who is submitting the form
router.post('/extactivity', passport.authenticate('jwt', { session: false }), (req, res) => {
    // bring in validation/experience function
    // const { errors, isValid } = validateExperienceInput(req.body);

    // // check validation
    // if(!isValid) {
    //     // return any errors with 400 status
    //     return res.status(400).json(errors);
    // }

    // console.log(req.body);
    Profile.findOne({ mentor: req.user._id })
        .then(profile => {
            const newExtActivity = req.body.activity;
            
            console.log(newExtActivity);


            //  add to exp array
            // unshift adds to front of array
            profile.ext_activities.unshift(newExtActivity);

            profile.save().then(profile => res.json(profile));
        })
});

module.exports = router;