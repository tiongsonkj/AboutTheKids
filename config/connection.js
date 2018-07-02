// let mysql = require('mysql');
// let con;

// //If the local server is a Heroku Jaws server run it on Heroku's server. Otherwise run's it on the local machine.
// if(process.env.JAWSDB_URL){
//   con = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else{
//   con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "*********",
//     database: "*********"
//   })
// } 

// //Feedback letting the developer know if a connection has been established.
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// module.exports = con;