var config = require('../config')
if (!config.tasks.css) return

var path         = require('path')
  , gulp         = require('gulp')
  , sass         = require('gulp-sass')
  , sourcemaps   = require('gulp-sourcemaps')
  , browserSync  = require('browser-sync')
  , autoprefixer = require('gulp-autoprefixer')
  , handleErrors = require('../lib/handleErrors')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions.join(',') + '}'),
  dest: path.join(buildPath, config.tasks.css.dest)
}

gulp.task('css', function () {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({ stream: true }))
})
