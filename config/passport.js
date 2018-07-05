const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Mentor = mongoose.model('mentor');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
        Mentor.findById(jwt_payload.id)
            .then(mentor => {
                if(mentor) {
                    return done(null, mentor);
                }
                // return false if there is no user
                return (done, false);
            })
            .catch(err => console.log(err));
        })
    );
};