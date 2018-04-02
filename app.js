var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config');
var reservationRoutes = require('./routes/reservationRoutes')


var port = process.env.PORT || 3000
var app = express();

mongoose.Promise = global.Promise;
// mongoose.connect(config.getDbConnectionString(), { useMongoClient: true });
mongoose.connect(config.getDbConnectionString());

mongoose.connection
    .once('open', () => { console.log('connected to database'); })
    .on('error', (error) => {
        console.log(error);
        console.warn('Warning', error);
    });
// Used to parse body of requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    // this will call the next route
    next();
});

app.get('/', function (req, res, next) {
    res.send("HOME PAGE");
});

// Routes to be added
app.use('/api', reservationRoutes);

// basic error handler
app.use(function (req, res, next) {
    console.log('we are handling error');
    var err = new Error('Not Found');
    console.log("error status is here:",err.status)
    err.status = 404;
    //this will call the error handler below
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    console.log('this is error handler');
    console.log(err.message);
    console.log('end of message');
    console.log("custom error status is here:",err.status)
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.send(err);
});

app.listen(port);