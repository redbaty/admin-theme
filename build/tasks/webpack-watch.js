var config = require('../config')
if (!config.tasks.js) return

var gulp          = require('gulp')
  , webpack       = require('webpack')
  , browserSync   = require('browser-sync')
  , logger        = require('../lib/compileLogger')
  , webpackConfig = require('../lib/webpack-multi-config')

gulp.task('webpack:watch', function (callback) {
  var initialCompile = false

  webpack(webpackConfig('development')).watch(200, function (err, stats) {
    logger(err, stats)
    browserSync.reload()
    // On the initial compile, let gulp know the task is done
    if (!initialCompile) {
      initialCompile = true
      callback()
    }
  })
})
