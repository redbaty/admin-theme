var browserSync = require('browser-sync')
var config      = require('../config')
var gulp        = require('gulp')
var path        = require('path')

gulp.task('browserSync', function () {
  if (process.env.NODE_ENV !== 'production') {
    config.tasks.browserSync.server.baseDir = config.root.build
  }

  return browserSync(config.tasks.browserSync)
})
