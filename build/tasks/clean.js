var config  = require('../config')

var gulp    = require('gulp')
  , os      = require('os')
  , del     = require('del')
  , path    = require('path')
  , gutil   = require('gulp-util')
  , package = require('../../package.json')

gulp.task('clean', function (cb) {
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var files = [
    config.root.deploy,
    // path.join(config.root.deploy, '/**/*'),
    path.join(buildPath, 'rev-manifest.json'),
    path.join(buildPath, '/.{editorconfig,gitignore,nojekyll}')
  ]

  for (var key in config.tasks) {
    var task = config.tasks[key]
    if (task.dest) {
      var glob = '**/*' + (task.extensions ? ('.{' + task.extensions.join(',') + ',map}') : '')
      files.push(path.join(buildPath, task.dest, glob))
    }
  }

  // Don't touch node_modules or source files!
  files.push('!node_modules/**/*')
  files.push('!' + path.join(config.root.src, '/**/*'))

  del(files).then(function (paths) {
    cb()
  })
})
