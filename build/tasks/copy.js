var config = require('../config')
if (!config.tasks.copy) return

var path         = require('path')
  , gulp         = require('gulp')
  , changed      = require('gulp-changed')
  , browserSync  = require('browser-sync')
  , handleErrors = require('../lib/handleErrors')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var paths = {
  src: [path.join(config.root.src, config.tasks.copy.src, '/**')],
  dest: path.join(buildPath, config.tasks.copy.dest)
}

config.tasks.copy.excludes.forEach(function (exclude) {
  paths.src.push('!' + path.join(config.root.src, config.tasks.copy.src, exclude))
})

gulp.task('copy', function () {
  return gulp.src(paths.src, { dot: true })
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({ stream: true }))
})
