const Validator = require('validator');
const isEmpty = require('./is-empty');

// might not need this
// maybe can use this to validate something else
module.exports = function validateProfileInput(data) {
    let errors = {};

    data.bio = !isEmpty(data.bio) ? data.bio : '';
    data.interests = !isEmpty(data.interests) ? data.interests : '';  
    data.ext_activities = !isEmpty(data.ext_activities) ? data.ext_activities : '';            
              

    // making use of validator!
    // these fields are required so thats why we are checking to see if they are empty
    if(Validator.isEmpty(data.bio)) {
        errors.bio = 'Please create a bio for your students!';
    }

    if(Validator.isEmpty(data.interests)) {
        errors.interests = 'Please let your students know what your interests are!';
    }

    if(Validator.isEmpty(data.ext_activities)) {
        errors.ext_activities = 'Please let your students know what you are involved in!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};