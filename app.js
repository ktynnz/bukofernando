var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var signupRouter = require('./routes/signup');
var profileRouter = require('./routes/profile');
var loginRouter = require('./routes/login');
var contactRouter = require('./routes/contact');
var worksRouter = require('./routes/works');
var logoutRouter = require('./routes/logout');

var nocache = require('nocache');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(nocache());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'nikolodeon'}));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/signup', signupRouter);
app.use('/profile', profileRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);
app.use('/works', worksRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
