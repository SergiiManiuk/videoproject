var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');

module.exports = function() {
  return gulp.src([
      './src/js/*.js'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        console.log('===========');
        console.log('ERROR JS');
        console.log('===========');
        this.emit('end');
      }}))
    //.pipe(concat('main.js'))
    .pipe(uglify())
    //.pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload({stream: true}));

};