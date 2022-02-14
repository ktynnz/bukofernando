var express = require('express');
const { redirect } = require('express/lib/response');
const res = require('express/lib/response');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb+srv://ktynnz:krystynnefernando@cluster0.88fco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
var ssn; 


router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('login', {error: ssn.profileError});
});


router.post('/', function(req, res, next) {
 
  ssn = req.session;
  ssn.username = req.body.username;
  var password = req.body.password; 

    MongoClient.connect(url, function(err, db){ 
        if(err) throw err; 

        var dbase = db.db("ProjectBuko");
        var query = {username: ssn.username, password: password};
            
            
            dbase.collection("users").findOne(query, function(err, info) { 
                if (err) throw err;
                if (info) {
                    
                    console.log(info.firstname);
                    ssn.username = info.username;
                    ssn.firstName = info.firstname;
                    ssn.lastName = info.lastname;
                    res.redirect('/profile');
                }

                else {
                    res.render('login', {error: 'The email or password does not exist.'});
                }
        });
    });
});


module.exports = router;