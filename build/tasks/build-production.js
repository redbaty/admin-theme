var config = require('../config')

var gulp            = require('gulp')
  , flatten         = require('arr-flatten')
  , getEnabledTasks = require('../lib/getEnabledTasks')

var tasks = getEnabledTasks('production')

gulp.task('build:production', flatten(['clean', tasks.assetTasks, tasks.codeTasks, 'rev']))
