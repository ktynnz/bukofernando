var express = require('express');
const { get, redirect } = require('express/lib/response');
var router = express.Router();
var ssn;

/* GET home page. */
router.get('/', function(req, res, next) {

  ssn = req.session;
  if(ssn.username) {
    res.render('profile', {firstname: ssn.firstName, lastname: ssn.lastName, username: ssn.username})
  }
  else {
    ssn.profileError = "You need to login";
    res.redirect('login');
  }
});


module.exports = router;
