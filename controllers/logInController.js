let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

//Accepts a username and password, queries the database for the username, decrypts the password and compares it to the password parameter, and outputs a boolean based on if the passwords match.
function validateUser(userName, password, cb, res){
    let sql = `SELECT password FROM users WHERE user_name="${userName}"`

    con.query(sql, function (err, result) {
        if (err) throw err;

        let hash = result[0].password;

        bcrypt.compare(password, hash, function(err, doesMatch){
        if (doesMatch){
            cb(true, res, userName);
        }else{
            cb(false, res);
        }
        });
    });
}

module.exports = validateUser;