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
app.use('/layer', express.static('/home/s_lech05/JamaSato/layer'));

/* http routing. */
// log code which is executed on every request
app.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url + ' was requested by ' + req.connection.remoteAddress);
    res.header('Access-Control-Allow-Origin', '*'); // allow CORS
    next();
});




/**
 * @desc AJAX.GET on server for sending a search request
 *       takes an array with search parameters
 *       and passes them to the search function
 *       url format: /search
 * @return metadata or error
 */
app.get('/search', function (req, res) {
    var searchString = req.query.searchInput;
    var fromDate = req.query.fromDate;
    var toDate = req.query.toDate;
    var coords = req.query.coords;
    var searchparams = [searchString, fromDate, toDate, coords];
    var erg = search.search(searchparams);
    console.log(erg[0].footprint);
    if(erg !== []){
        res.json(erg);
    } else res.send("nothing found")

});

/**
 * @desc AJAX.GET on server for getting merged Layer
 *       takes an array with search BandIDs and the path to directory,
 *       and passes them to the creatingLayer function
 *       url format: /chooseBands
 * @return layerPath or error
 */
app.get('/chooseBands', function (req, res) {
    var red = req.query.red;
    var green = req.query.green;
    var blue = req.query.blue;
    var dir = req.query.dir;

    var bandParams = [red, green, blue, dir];
    var layer = createLayer.createLayer(bandParams);
    res.send(layer);

});

/**
 * @desc AJAX.GET on server for getting merged Layer
 *       takes an array with Color Values,
 *       and passes them to the changeBrightness function
 *       url format: /brightness
 * @return layerPath or error
 */
app.get('/brightness', function (req, res) {
    var redvaluemin = req.query.redvaluemin;
    var redvaluemax = req.query.redvaluemax;
    var greenvaluemin = req.query.greenvaluemin;
    var greenvaluemax = req.query.greenvaluemax;
    var bluevaluemin = req.query.bluevaluemax;
    var bluevaluemax = req.query.bluevaluemax;
    var colorValues = [redvaluemin, redvaluemax, greenvaluemin, greenvaluemax, bluevaluemin, bluevaluemax];
    var layer = createLayer.changeBrightness(colorValues);
    res.send(layer);

});

app.route('/')
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
