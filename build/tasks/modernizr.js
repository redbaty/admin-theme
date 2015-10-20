var config    = require('../config')

var gulp      = require('gulp')
  , modernizr = require('gulp-modernizr')
  , uglify    = require('gulp-uglify')
  , path      = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.js'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}

gulp.task('modernizr', function () {
  gulp.src(paths.src)
    .pipe(modernizr('modernizr.min.js'))
    .pipe(uglify({ preserveComments: 'license' }))
    .pipe(gulp.dest(paths.dest))
})
