var config = require('../config')
  , flatten = require('arr-flatten')

// Grouped by what can run in parallel
// var assetTasks = ['fonts', 'iconFont', 'images', 'svgSprite']
var assetTasks = ['fonts', 'images']
  , codeTasks = ['html', 'css', 'js']

module.exports = function (env) {
  var jsTasks = {
    watch: 'webpack:watch',
    development: 'webpack:development',
    production: 'webpack:production'
  }

  var matchFilter = function (task) {
    if (config.tasks[task]) {
      if (task === 'js') {
        task = jsTasks[env] || jsTask.watch
      }
      return task
    }
  }

  return {
    assetTasks: flatten(assetTasks.map(matchFilter)),
    codeTasks: flatten(codeTasks.map(matchFilter))
  }
}
