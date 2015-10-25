var config = require('../config')
if (!config.tasks.svgSprite) return

var path        = require('path')
  , gulp        = require('gulp')
  , imagemin    = require('gulp-imagemin')
  , svgstore    = require('gulp-svgstore')
  , browserSync = require('browser-sync')

gulp.task('svgSprite', function () {
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var settings = {
    src: path.join(config.root.src, config.tasks.svgSprite.src, '/*.svg'),
    dest: path.join(buildPath, config.tasks.svgSprite.dest)
  }

  return gulp.src(settings.src)
    .pipe(imagemin())
    .pipe(svgstore())
    .pipe(gulp.dest(settings.dest))
    .pipe(browserSync.reload({stream: true}))
})
