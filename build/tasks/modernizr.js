var config = require('../config')

var path      = require('path')
  , gulp      = require('gulp')
  , uglify    = require('gulp-uglify')
  , modernizr = require('gulp-modernizr')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.js'),
  dest: path.join(buildPath, config.tasks.js.dest)
}

gulp.task('modernizr', function () {
  gulp.src(paths.src)
    .pipe(modernizr('modernizr.min.js'))
    .pipe(uglify({ preserveComments: 'license' }))
    .pipe(gulp.dest(paths.dest))
})
