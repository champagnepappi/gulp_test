const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

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
