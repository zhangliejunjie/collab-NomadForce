var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var watch = require('gulp-watch');
var pug = require('gulp-pug-3');
var uglify = require('gulp-uglify');
const formatHtml = require('gulp-format-html')
const imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
  return gulp.src('app/pug/+(index.pug|news-detail.pug)') 
    .pipe(pug())
    .pipe(gulp.dest('app/page'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss') 
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
});

gulp.task('views', function() {
  return gulp
    .src('app/page/**/*.html')
    .pipe(formatHtml())
    .pipe(gulp.dest('dist'))
});

gulp.task('images',function(){
  gulp.src('app/images/**/*.+(png|jpg|gif|svg|jpeg)')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
});

gulp.task('minify', function () {
  gulp.src('app/js/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('dist/js'))
});

exports.watch = function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('app/page/**/*.html', gulp.series('views'));
    gulp.watch('app/page/**/*.js', gulp.series('minify'));
    gulp.watch('app/images/**/*.+(png|jpg|gif|svg|jpeg)', gulp.series('images'));
};