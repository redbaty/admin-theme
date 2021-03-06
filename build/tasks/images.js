var config = require('../config')
if (!config.tasks.images) return

var path        = require('path')
  , gulp        = require('gulp')
  , changed     = require('gulp-changed')
  , imagemin    = require('gulp-imagemin')
  , browserSync = require('browser-sync')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**'),
  dest: path.join(buildPath, config.tasks.images.dest)
}

gulp.task('images', function () {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}))
})
