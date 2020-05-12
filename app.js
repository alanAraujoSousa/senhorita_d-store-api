var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var productsRoute = require('./routes/products');
var ordersRoute = require('./routes/orders');

var app = express();

app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);

app.use(cors({
	origin: "*",
	methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
	allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
