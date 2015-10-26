var config = require('../../config')
if (!config.tasks.iconFont) return

var path             = require('path')
  , gulp             = require('gulp')
  , iconfont         = require('gulp-iconfont')
  , generateIconSass = require('./generateIconSass')
  , handleErrors     = require('../../lib/handleErrors')
  , package          = require('../../../package.json')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  , fontPath = path.join(buildPath, config.tasks.iconFont.dest)
  , cssPath = path.join(buildPath, config.tasks.css.dest)

var settings = {
  name: package.name + ' icons',
  src: path.join(config.root.src, config.tasks.iconFont.src, '/*.svg'),
  dest: path.join(buildPath, config.tasks.iconFont.dest),
  sassDest: path.join(config.root.src, config.tasks.css.src, config.tasks.iconFont.sassDest),
  template: path.normalize('./gulpfile.js/tasks/iconFont/template.sass'),
  sassOutputName: '_icons.sass',
  fontPath: path.relative(cssPath, fontPath),
  className: 'icon',
  options: {
    svg: true,
    timestamp: 0, // see https://github.com/fontello/svg2ttf/issues/33
    fontName: 'icons',
    appendUnicode: true,
    normalize: false,
    formats: config.tasks.iconFont.extensions
  }
}

gulp.task('iconFont', function () {
  return gulp.src(settings.src)
    .pipe(iconfont(settings.options))
    .on('glyphs', generateIconSass(settings))
    .on('error', handleErrors)
    .pipe(gulp.dest(settings.dest))
})

module.exports = settings
