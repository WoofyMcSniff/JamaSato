var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var search = require('./search.js');
var createLayer = require('./creatingLayer.js');

//var index = require('./index.js');

var app = express();
/* give access to following folders */
app.use(express.static("../server"));
app.use(express.static("../app"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(""));  //hier Pfad zu metadaten einfügen
app.use(logger('combined'));

/* http routing. */
// log code which is executed on every request
app.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url + ' was requested by ' + req.connection.remoteAddress);
    res.header('Access-Control-Allow-Origin', '*'); // allow CORS
    next();
});

app.route('/:erg')
    .get(function (req, res) {  //sends index.html
        console.log('accessing homepage');
        res.render('index.html');
        var erg = res.params.erg;
        console.log(erg);
        //req.session.erg = null;
    });
    /*.post(function (req, res) {
        console.log('searching for ' + req.body.searchparams);
        var searchparams = req.body.searchparams;
        console.log('1');
        res.redirect('/');
    });*/



/**
 * @desc AJAX.POST on server for sending a search request
 *       takes an array with search parameters via POST,
 *       and passes them to the search function
 *       url format: /search
 * @return metadata or error
 */
app.post('/search', function (req, res) {
    var searchString = req.body.searchInput;
    var fromDate = req.body.fromDate;
    var toDate = req.body.toDate;
    var coords = req.body.coords;
    var searchparams = [searchString, fromDate, toDate, coords];
    var erg = JSON.stringify(search.search(searchparams));
    console.log("passing json");
    res.json(erg);
    res.redirect('/'); //+ encodeURIComponent(erg));
});


app.get('/search/:erg', function (req, res) {   //anschauen, wie die weitergabe funktioniert
    console.log("received");
    res.render('index.html');
});

/**
 * @desc AJAX.POST on server for sending a search request
 *       takes an array with search parameters via POST,
 *       and passes them to the search function
 *       url format: /search
 * @return metadata or error
 */
app.post('/chooseBands', function (req, res) {
    var red = req.body.red;
    var green = req.body.green;
    var blue = req.body.blue;
    var bands = [red, green, blue];
    console.log(bands);
    createLayer.createLayer();
    res.redirect('/');

});


/**
 * @desc AJAX.GET to access search.
 *       find all searched items and sends them client
 *       url format: /:searchparams
 * @return searchdata or error

 app.get('/:searchparams', function (req, res, next) {
     //welche Parameter werden übergeben??

    res.send('index', {output: req.params.searchparams})
});
 */

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send('Error Status 500');
});


module.exports = app;