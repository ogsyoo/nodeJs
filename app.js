var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var gsy = require('./routes/gsy');
var redis = require('./routes/redis');
var app = express();
var logger = require('fluent-logger');
var router = express.Router();
logger.configure('fluentd.test',{
  host:'localhost',
  port:24224,
  timeout:3.0,
  reconnectInterval:600000  // 10分钟
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.use('/gsy', gsy);
app.use('/redis', redis);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
