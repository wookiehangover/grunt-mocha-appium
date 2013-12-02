/*
 * grunt-mocha-selenium
 * https://github.com/wookiehangover/grunt-mocha-selenium
 *
 * Copyright (c) 2013 Sam Breed
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    mochaAppium: {
      options: {
        timeout: 30e3
      },
      iphone: {
        src: ['test/functional/appium.js'],
        options: {
          device: 'iPhone Simulator',
          platform: 'MAC',
          version: '6.1',
          app: 'http://appium.s3.amazonaws.com/TestApp6.0.app.zip',
          browserName: "iOS",
          newCommandTimeout: 60
        }
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['mochaAppium']);

  grunt.registerTask('default', ['jshint', 'test']);
};
