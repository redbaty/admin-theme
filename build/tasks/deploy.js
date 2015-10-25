var config = require('../config')

var path    = require('path')
  , gulp    = require('gulp')
  // , open    = require('open')
  , ghPages = require('gulp-gh-pages')
  , package = require('../../package.json')

var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
var settings = {
  url: package.homepage,
  src: path.join(buildPath, '/**/*'),
  ghPages: {
    cacheDir: path.join(config.root.deploy)
  }
}

if (process.env.GH_REPO_TOKEN && process.env.TRAVIS_REPO_SLUG) {
  settings.ghPages.remoteUrl = [
    'https://',
    process.env.GH_REPO_TOKEN,
    ':@github.com/',
    process.env.TRAVIS_REPO_SLUG
    ].join('')
}

gulp.task('deploy', ['build:production'], function () {
  return gulp.src(settings.src)
    .pipe(ghPages(settings.ghPages))
    // .on('end', function () {
    //   if (!process.env.TRAVIS) open(settings.url)
    // })
})
