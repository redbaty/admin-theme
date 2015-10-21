var config  = require('../config')

var gulp    = require('gulp')
  , path    = require('path')
  // , open    = require('open')
  , ghPages = require('gulp-gh-pages')
  , package = require('../../package.json')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var settings = {
  url: package.homepage,
  src: path.join(buildPath, '/**/*'),
  ghPages: {
    cacheDir: path.join(config.root.deploy),
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
