var config  = require('../config')

var gulp    = require('gulp')
  , os      = require('os')
  , del     = require('del')
  , path    = require('path')
  , gutil   = require('gulp-util')
  , package = require('../../package.json')

gulp.task('clean', function (cb) {
  var files = [
    path.join(config.root.dest, 'rev-manifest.json'),
    path.join(config.root.tmp, package.name, '/**/*')
  ]

  for (var key in config.tasks) {
    var task = config.tasks[key]
    if (task.dest) {
      var glob = '**/*' + (task.extensions ? ('.{' + task.extensions.join(',') + ',map}') : '')
      files.push(path.join(config.root.dest, task.dest, glob))
    }
  }

  // Don't touch node_modules or source files!
  files.push('!node_modules/**/*')
  files.push('!' + path.join(config.root.src, '/**/*'))

  del(files).then(function (paths) {
    // console.log(paths)
    cb()
  })
})
