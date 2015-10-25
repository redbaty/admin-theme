var config = require('../config')
if (!config.tasks.fonts) return

var path         = require('path')
  , gulp         = require('gulp')
  , changed      = require('gulp-changed')
  , browserSync  = require('browser-sync')
  , handleErrors = require('../lib/handleErrors')

var pattern = '/**.{' + config.tasks.fonts.extensions.join(',') + '}'
var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var paths = {
  src: [path.join(config.root.src, config.tasks.fonts.src, pattern)],
  dest: path.join(buildPath, config.tasks.fonts.dest)
}

config.tasks.fonts.includePaths.forEach(function (includePath) {
  paths.src.push(path.join(config.root.bower, includePath, pattern))
})

gulp.task('fonts', function () {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})
