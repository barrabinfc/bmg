var remapify = require('remapify')
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            css: {
                src: [
                        'media/assets/css/libs/fa/font-awesome.css',
                        'media/assets/css/libs/bootstrap/bootstrap.css',
                        'media/assets/css/app/app.css'
                    ],
                dest: 'media/assets/css/app.css'
            },
            js_vendors: {
                src: [
                      // jquery js
                      'media/assets/js/jquery/jquery.min.js',
                      'media/assets/js/jquery/jquery.throttle.min.js',
                      'media/assets/js/jquery/jquery.zoomooz.js',
                      'media/assets/js/jquery/jquery.imagesloaded.js',
                      'media/assets/js/jquery/jquery.transit.js',
                      'media/assets/js/jquery/jquery.mousewheel.js',
                      'media/assets/js/jquery/dropzone.js',

                      'media/assets/js/bootstrap/bootstrap.js',

                      //mootools
                      'media/assets/js/mootools/mootools-core-1.3.2.js',
                      'media/assets/js/mootools/mootools-more-1.3.2.js',
                      'media/assets/js/mootools/wall.js',

                      // swfobject
                      'media/assets/js/misc/swfobject.js'
                      ],
                dest: 'media/assets/js/vendors.js'
            }
        },
        cssmin: {
            css:{
                src:  '<%= concat.css.dest %>',
                dest: 'media/assets/css/app.min.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                    files: {
                        'media/assets/js/vendors.min.js': ['<%= concat.js_vendors.dest %>'],
                        'media/assets/js/app.min.js': ['media/assets/js/app.js'],
                        'media/assets/js/app.full.min.js': ['media/asset/js/vendors.js', 'media/assets/js/app.js'],
                    }
                }
        },
        browserify: {
            dist: {
                banner: "/* WTFBrowserify */",
                transform: ['coffeeify',],
            },
            client: {
                options: {
                    transform: ['coffeeify',],
                    extensions: ['.js','.coffee'],
                    debug: true,
                },
                files: {
                    'media/assets/js/app.js': ['./media/assets/js/app/index.coffee',]

                }
            }
        },
        watch: {
            css: {
                files: ['media/assets/css/app/*'],
                tasks: ['concat:css',]

            },
            js: {
                files: ['media/assets/js/app/*',
                        'media/assets/js/app/**/*'],
                tasks: ['browserify',]
            }
        },
        clean: {
            dist: [ 'media/assets/js/vendors.*',
                    'media/assets/js/app.*',
                    'media/assets/css/app.min.css']
        }
    });


    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-browserify');

    //grunt.registerTask('default',['concat','browserify']);
    grunt.registerTask('css_minify', ['concat:css','cssmin'])
    grunt.registerTask('js_build',['concat:js_vendors','browserify','uglify'])

    grunt.registerTask('default',['css_minify',
                                  'js_build',
                                  'uglify'])

    grunt.registerTask('clean',['clean',]);
}
