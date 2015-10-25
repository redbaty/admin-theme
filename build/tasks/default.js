var gulp            = require('gulp')
  , sequence        = require('gulp-sequence')
  , getEnabledTasks = require('../lib/getEnabledTasks')

gulp.task('default', function (cb) {
  var watch = getEnabledTasks('watch')
  sequence('clean', watch.assetTasks, watch.codeTasks, 'watch', cb)
})
