module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stitch_extra: {
            options: {},
            app: {
            files: [
                {
                    dest: 'media/assets/js/package.js',
                    paths: [__dirname + '/media/assets/js/app']
                }
            ]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['media/assets/js/app/*.js','media/assets/js/app/*.coffee'],
                dest: 'media/assets/js/app_concat.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                    files: {
                        'media/assets/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                    }
                }
        },
        watch: {
            files: ['<%= concat.dist.src %>'],
            tasks: ['concat', 'uglify']
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-stitch-extra');

    grunt.registerTask('default',['stitch_extra']);
}
