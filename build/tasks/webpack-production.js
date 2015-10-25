var config = require('../config')
if (!config.tasks.js) return

var gulp          = require('gulp')
  , webpack       = require('webpack')
  , logger        = require('../lib/compileLogger')
  , webpackConfig = require('../lib/webpack-multi-config')

gulp.task('webpack:production', function (callback) {
  webpack(webpackConfig('production'), function (err, stats) {
    logger(err, stats)
    callback()
  })
})
