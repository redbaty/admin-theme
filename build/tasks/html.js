var config       = require('../config')
if (!config.tasks.html) return

var _            = require('lodash')
  , fs           = require('fs')
  , gulp         = require('gulp')
  , path         = require('path')
  , gulpif       = require('gulp-if')
  , data         = require('gulp-data')
  , swig         = require('gulp-swig')
  , rename       = require('gulp-rename')
  , htmlmin      = require('gulp-htmlmin')
  , browserSync  = require('browser-sync')
  , handleErrors = require('../lib/handleErrors')

var package = require('../../package.json')
var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')
var extensions = config.tasks.html.extensions.join(',')
var options = {
  defaults: { cache: false }
}
var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.{' + extensions + '}'), exclude],
  dest: path.join(config.root.dest, config.tasks.html.dest),
}

var getData = function (file) {
  console.log(file)
  var dataPath = path.resolve(config.root.src, config.tasks.html.dataFile)
    , dataJson = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  return _.merge(dataJson, {
    app: {
      version: package.version,
      description: package.description,
      homepage: package.homepage,
      license: package.license
    }
  })
}

gulp.task('html', ['copy'], function () {
  return gulp.src(paths.src)
    .pipe(data(getData))
    .pipe(swig(options))
    .on('error', handleErrors)
    .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)
})
