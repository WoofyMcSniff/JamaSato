var exports = module.exports = {};

exports.createLayer = function (red, green, blue, dir) {
    var pythonShell = require('python-shell');
    var options = {
        args: [red, green, blue, dir]
    };
    pythonShell.run('pythonScripts/creatingLayer.py', options, function (err) {
        if (err) throw err;
        console.log('finished');
    })
};