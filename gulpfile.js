var jshint = require('gulp-jshint');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyJs = require('gulp-minify');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-cssnano');
var minifyHTML = require('gulp-htmlmin');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var less = require('gulp-less');
var watch = require('gulp-watch');
var paths = {
    scripts: ['./app/js/**/*.js','./app/modules/**/*.js'],
    styles: './app/css/app.css',
    images: './app/img/**/*.*',
    templates: './app/modules/**/*.html',
    index: './app/index.html',
    //data: 'src/data/*.*',
    bower_fonts: './bower_components/font-awesome/fonts/*.{ttf,woff,eof,svg,woff2}',
};
gulp.task('css', function() {
  return gulp.src(paths.styles)
    .pipe(less())
    .pipe(gulp.dest('dist/styles'));
});
gulp.task('jsHandler', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('app.js',{
      newLine:'\n;'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});
gulp.task('usemin',function(){
  return gulp.src(paths.index)
    .pipe(usemin({
      js: ['concat'],
      //css: [minifyCss({keepSpecialComments: 0}), 'concat']
    }))
    .pipe(gulp.dest('dist/'));
});
gulp.task('copy-bower_fonts', function() {
  return gulp.src(paths.bower_fonts)
    // .pipe(rename({
    //   dirname: '/fonts'
    // }))
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('views', function() {
  return gulp.src(paths.templates)
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/modules'));
});
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/img'));
});
gulp.task('webserver', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8888
  });
});
gulp.task('livereload', function() {
  gulp.src(['dist/**/*.*'])
    .pipe(watch(['dist/**/*.*']))
    .pipe(connect.reload());
});
gulp.task('watch', function() {
  gulp.watch([paths.images], ['images']);
  gulp.watch([paths.styles], ['css']);
  gulp.watch([paths.scripts], ['jsHandler']);
  gulp.watch([paths.templates], ['views']);
  gulp.watch([paths.index], ['usemin']);
});
gulp.task('build', ['usemin','css' ,'views','images' ,'jsHandler']);
gulp.task('default',['build', 'webserver', 'livereload', 'watch']);
