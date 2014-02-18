// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Configure Grunt
  grunt.initConfig({

    coffee: {
        compile: {
            files: {
                'media/assets/js/package_grunt.js': 'media/assets/js/app/*.coffee'
            }
        }
    },

    watch: {
        all: {
            files: ['genitalia/templates/**/*.html',
                     'media/assets/css/**/*.css',
                     'media/assets/js/package.js',
                     'media/assets/js/app/**/*.js'],
            options: {
                livereload: true
            }
        }
    },

    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:8080'
      }
    }
  });

  // Creates the `server` task
  grunt.registerTask('vaifilhao', [
    'coffee',
    'open',
    'watch'
  ]);
};
