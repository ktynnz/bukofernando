var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kikzcafe@gmail.com',
    pass: 'Kn06241924'
  }
}); 


/* get contact page */
router.get('/', function(req, res, next) {
  res.render('contact');
});


router.post('/', function(req, res, next) {
  var name = req.body.name; //should be identical with name="" in form to call this data
  var email = req.body.email;
  var message = req.body.message;
  
  //send an email to the webmaster
  var mailOptions = {
    from: email,
    to: 'kikzcafe@gmail.com',
    subject: 'Contact form enquiry from ' + name,
    text: 'Message: ' + message + '\nFrom: ' + email
  }

  //use transporter to send email
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
      res.render('contact', {error: 'Something went wrong.'});
    }
    else {
      console.log("Email Sent");
      res.render('contact', {message: 'Message sent!'});
    }
  });
});


module.exports = router;
