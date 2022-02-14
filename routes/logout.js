var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //log the user out
  //1. destroy/delete the session variables
  req.session.destroy()
  
  //2. redirect the user to signup page
  res.redirect('login')

});

module.exports = router;
