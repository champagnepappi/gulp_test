const gulp = require('gulp');

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
