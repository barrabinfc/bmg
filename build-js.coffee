#/*
#* Run this to compile genitalia frontend js code to
#* a single file
#*/
require("coffee-script")
stitch  = require('stitch');
fs      = require('fs');
watch   = require('watch');

APP_SRC = __dirname + '/media/assets/js/app'
APP_OUT = 'media/assets/js/package.js'

compile = ->
    pack = stitch.createPackage({
      paths: [ APP_SRC ]
    });

    pack.compile (err,source) ->
        if (err)
            throw err;

        fs.unlink( APP_OUT , ->
            fs.writeFile( APP_OUT, source, (err) ->
                if (err) 
                    throw err

                console.log("Compiled #{ APP_SRC } to #{ APP_OUT }")
            )
        )

watch.watchTree APP_SRC, ->
    compile()
