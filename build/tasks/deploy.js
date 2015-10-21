var config  = require('../config')

var gulp    = require('gulp')
  , path    = require('path')
  // , open    = require('open')
  , ghPages = require('gulp-gh-pages')
  , package = require('../../package.json')

var settings = {
  url: package.homepage,
  src: path.join(config.root.dest, '/**/*'),
  ghPages: {
    cacheDir: path.join(config.root.tmp, package.name),
    push: true
  }
}

gulp.task('deploy', ['build:production'], function () {
  return gulp.src(settings.src)
    .pipe(ghPages(settings.ghPages))
    // .on('end', function (){
    //   open(settings.url)
    // })
})
