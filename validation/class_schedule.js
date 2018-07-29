const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateClassScheduleInput(data) {
    let errors = {};

    data.period = !isEmpty(data.period) ? data.period : '';
    data.class_name = !isEmpty(data.class_name) ? data.class_name : '';
    data.room_number = !isEmpty(data.room_number) ? data.room_number : '';            
                
    // making use of validator!
    if(Validator.isEmpty(data.period) || data.period == "Please select an option...") {
        errors.period = 'Please provide the class period!';
    }
    if(Validator.isEmpty(data.class_name)) {
        errors.class_name = 'Please provide the class name!';
    }
    if(Validator.isEmpty(data.room_number)) {
        errors.room_number = 'Please provide the room number!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};