const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
 -- TOP LEVEL FUNCTIONS --
 gulp.task - define tasks
 gulp.src - point to files to use
 gulp.dest - points to folder to output
 gulp.watch  - watch files and folders for changes
 */

// logs message
gulp.task('message', function() {
  return console.log('Gulp is running...');
});

gulp.task('default', function() {
  return console.log('Gulp is running...');
});

//copy all html files to dist
gulp.task('copyHTML', function() {
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
})

//optimize images
gulp.task('imageMin', ()=>
  gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);

//minify js
gulp.task('minify-js', function() {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

//compile sass
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'))
});

//concat js files into one
gulp.task('concat-js', function() {
  gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['copyHTML', 'imageMin', 'sass', 'message', 'concat-js'])

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['concat-js']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/sass/*.scss', ['sass']);
})
