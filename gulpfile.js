'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');


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

// compile scss into css
gulp.task('compile_scss', function() {
   return gulp.src('src/assets/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['> 1%', 'IE 9'],
            cascade: false
        }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('src/assets/styles/'))
    .pipe(connect.reload())
    .pipe(notify('compile scss into css Done! :)'));
});

gulp.task('default', ['compile_scss', 'inject_sort', 'connect']);