'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var notify = require('gulp-notify');


gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

// inject all neccessary app files and libraries into html
gulp.task('inject_sort', function(){
  return gulp.src('src/index.html')
  .pipe(inject(
    gulp.src(mainBowerFiles({
      paths: {
        bowerDirectory: 'bower_components',
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
      },
          includeDev: true
    }), {read: false}), {name: 'bower'}))
  .pipe(inject(
    gulp.src(['src/app/*.js','src/app/**/*.js'])
      .pipe(angularFilesort())
  ))
  .pipe(inject(
    gulp.src(['src/assets/styles/*.css'])
  ))
  .pipe(gulp.dest(''))
  .pipe(connect.reload())
  .pipe(notify('sort and inject Done! :)'));
});

gulp.task('default', ['inject_sort', 'connect']);