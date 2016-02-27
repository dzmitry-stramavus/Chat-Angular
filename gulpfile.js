'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('default', ['connect']);