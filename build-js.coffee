#/*
#* Run this to compile genitalia frontend js code to
#* a single file
#*/
stitch  = require('stitch');
fs      = require('fs');

pack = stitch.createPackage({
  paths: [__dirname + '/media/assets/js/app']
});


console.log( __dirname + '/media/assets/js/app')

pack.compile (err,source) ->
    if (err)
        throw err;

    fs.writeFile('media/assets/js/package.js', source, (err) ->
        if (err) 
            throw err;

        console.log('Compiled media/assets/js/package.js');
    )
