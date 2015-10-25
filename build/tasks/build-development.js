var config = require('../config')

var gulp            = require('gulp')
  , flatten         = require('arr-flatten')
  , getEnabledTasks = require('../lib/getEnabledTasks')

var tasks = getEnabledTasks('development')

gulp.task('build:development', flatten(['clean', tasks.assetTasks, tasks.codeTasks, 'rev']))
