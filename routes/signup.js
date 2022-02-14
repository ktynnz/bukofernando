var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb+srv://ktynnz:krystynnefernando@cluster0.88fco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 

var ssn; 


router.get('/', function(req, res, next) {
  res.render('signup');
});


router.post('/', function(req, res, next) {

  ssn = req.session;

  ssn.username = req.body.username;
  ssn.firstname = req.body.firstname;
  ssn.lastname = req.body.lastname;
  ssn.email = req.body.email;
  var password = req.body.password; 

MongoClient.connect(url, function(err, db){ 
  if(err) throw err; 

    var dbase = db.db("ProjectBuko");
    var data = {username: ssn.username};

      dbase.collection("users").findOne(data, function(err, result) {
        if(result) {
          req.session.destroy();
          res.render('signup', {error: "This user already has an account."})
        }
        else { 
          var data = {username: ssn.username, firstname: ssn.firstname, lastname: ssn.lastname, email: ssn.email, password: password};
          dbase.collection("users").insertOne(data, function(err, res) {
              if(err) throw err;
              console.log("added to database");
              db.close();
          });
          res.redirect('profile')
        } 
    });
  })
});



module.exports = router;