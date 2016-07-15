var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    autoprefixer = require('autoprefixer');

module.exports = function() {
  return gulp.src([
      './src/styles/style.less'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        console.log('===========');
        console.log('ERROR CSS');
        console.log('===========');
        this.emit('end');
    }}))
    .pipe(postcss([
      require('autoprefixer'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      autoprefixer({ browsers: ["> 0%"] })
    ]))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload({stream: true}));
};
