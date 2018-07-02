const router = require("express").Router();
const jwt = require('jsonwebtoken');
const users = require("../../controllers/logInController.js");
const newUser = require("../../controllers/registerController.js");

router.post("/login", function(req, res) {
    console.log(req.body.username);
    users(req.body.username, req.body.password, cb, res);
});

router.post("/signup", function(req, res) {
    //newUser(req.body.username, req.body.password, cb, res);
    res.send('Registered!')
  });

router.get("/userAccount/:token", function(req, res){
  verify(req.params.token);
});

//Accepts a result parameter, and if result is true creates a token and sends it to the client. Otherwise alerts the client log in has failed.
function cb(result, res, userName){
    let token = false;

    if(result){
      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: userName,
      }, 'WeAreSparTans');
      res.send(token);
    }
    else{
      console.log('Log in Failed')
    }
}

function verify(token){
  let decoded = jwt.verify(token, 'WeAreSparTans');
  console.log(decoded);
}


module.exports = router;
