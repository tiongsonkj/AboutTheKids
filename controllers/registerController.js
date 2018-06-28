
let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

//Accepts a username and password and inputs them into a database specified by the con variable.
function addUser(userName, password, cb, res){
    bcrypt.hash(password, 5, function( err, bcryptedPassword) {
        let newPassword = bcryptedPassword;
        let sql = `INSERT INTO users (user_name, password, email) VALUES ("${userName}", "${newPassword}", "testing");`

        con.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}

module.exports = addUser;
