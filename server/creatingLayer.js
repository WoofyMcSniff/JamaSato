var exports = module.exports = {};

var pythonShell = require('python-shell');
/**
 * @desc function to create Layer with given ids
 * @param {string} red BandId of red channel
 * @param {string} green BandId of green channel
 * @param {string} blue BandId of blue channel
 * @param {string} dir path to directory with bands
 * @return created Layer or err
**/
exports.createLayer = function (red, green, blue, dir) {
        var options = {
            args: [red, green, blue, dir]
        };
        pythonShell.run('pythonScripts/mergeBands.py', options, function (err) {
            if (err) throw err;
            console.log('finished');
        })
};
/**
  * @desc function to alter brighness of bands
  * @param {string} rvmin Min value of red band
  * @param {string} rvmax Max value of red band
  * @param {string} gvmin Min value of green band
  * @param {string} gvmax Max value of green band
  * @param {string} bvmin Min value of blue band
  * @param {string} bvmin Max value of blue band
  * @param {string} path path to file with bands
  * @return altered Layer or error
**/
exports.changeBrightness = function  (rvmin, rvmax, gvmin, gvmax, bvmin, bmax, path) {
          var options = {
              args: [rvmin, rvmax, gvmin, gvmax, bvmin, bmax, path]
          };
          pythonShell.run('pythonScripts/setBrightness.py', options, function (err) {
              if (err) throw err;
              console.log('finished');
          })
}
