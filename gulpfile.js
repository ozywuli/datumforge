var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  return gulp.src('app/src/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({

    }))
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../lib' }))
    .pipe(gulp.dest('dist'));
})
