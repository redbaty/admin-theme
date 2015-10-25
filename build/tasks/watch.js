var config = require('../config')

var path = require('path')
  , gulp = require('gulp')

gulp.task('watch', ['browserSync'], function () {
  // var watchableTasks = ['fonts', 'iconFont', 'images', 'svgSprite','html', 'css']
  var watchableTasks = ['fonts', 'images', 'html', 'css']

  watchableTasks.forEach(function (taskName) {
    var task = config.tasks[taskName]
    if (taskName === 'html') {
      task.extensions.push('json')
      task.src = '{' + task.src + ',data}'
    }
    if (task) {
      var filePattern = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      gulp.watch(filePattern, [taskName])
    }
  })
})
