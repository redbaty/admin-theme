var config = require('../config')
if (!config.tasks.html) return

var path         = require('path')
  , gulp         = require('gulp')
  , gulpif       = require('gulp-if')
  , data         = require('gulp-data')
  , swig         = require('gulp-swig')
  // , gutil        = require('gulp-util')
  , htmlmin      = require('gulp-htmlmin')
  , browserSync  = require('browser-sync')
  , getData      = require('../lib/getData')
  , handleErrors = require('../lib/handleErrors')

var package = require('../../package.json')
  , exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')
  , extensions = config.tasks.html.extensions.join(',')
  , isProduction = process.env.NODE_ENV === 'production'
  , buildPath = isProduction ? config.root.dest : config.root.build

var options = {
  defaults: { cache: false }
}
var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.{' + extensions + '}'), exclude],
  dest: path.join(buildPath, config.tasks.html.dest),
}

gulp.task('html', ['copy'], function () {
  return gulp.src(paths.src)
    .pipe(data(getData))
    .pipe(swig(options))
    .on('error', handleErrors)
    .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)
})
