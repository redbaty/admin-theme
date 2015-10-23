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
var isProduction = process.env.NODE_ENV === 'production'
var options = {
  defaults: { cache: false }
}
var buildPath = isProduction ? config.root.dest : config.root.build
var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.{' + extensions + '}'), exclude],
  dest: path.join(buildPath, config.tasks.html.dest),
}

var getData = function (file) {
  var dataPath = path.resolve(config.root.src, config.tasks.html.dataFile)
    , dataJson = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

  return _.merge(dataJson, {
    app: {
      version: package.version,
      description: package.description,
      url: isProduction ? package.homepage : config.root.url,
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
