/*
 * Run this to compile genitalia frontend js code to
 * a single file
 */
var stitch  = require('stitch');
var fs      = require('fs');

var package = stitch.createPackage({
  paths: [__dirname + '/media/assets/js', __dirname + '/']
});

package.compile(function (err, source){
  fs.writeFile('media/assets/js/package.js', source, function (err) {
    if (err) throw err;
    console.log('Compiled package.js');
  })
});
