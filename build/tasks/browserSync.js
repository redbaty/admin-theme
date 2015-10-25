var config = require('../config')

var path        = require('path')
  , gulp        = require('gulp')
  , browserSync = require('browser-sync')

gulp.task('browserSync', function () {
  if (process.env.NODE_ENV !== 'production') {
    config.tasks.browserSync.server.baseDir = config.root.build
  }
  return browserSync(config.tasks.browserSync)
})
