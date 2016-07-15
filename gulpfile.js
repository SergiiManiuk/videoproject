var gulp = require('gulp'),
		connect = require('gulp-connect');
gulp.task('postcss', require('./tasks/postcss'));

gulp.task('jsfiles', require('./tasks/jsfiles'));

gulp.task('connect', require('./tasks/connect'));

gulp.task('htmlReload', function () {
  return gulp.src('*.html')
    .pipe(connect.reload({stream: true}));
});


gulp.task('watch', function() {
  gulp.watch('./src/styles/*.less', ['postcss']);
  gulp.watch('./src/js/*.js', ['jsfiles']);
  gulp.watch('*.html', ['htmlReload']);
});

gulp.task('default', ['watch', 'connect', 'postcss', 'jsfiles', 'htmlReload']);


