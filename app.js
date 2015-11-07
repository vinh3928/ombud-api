var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.use(function(req, res, next) {

})
