var config    = require('../../config')

var path      = require('path')
  , gulp      = require('gulp')
  , rev       = require('gulp-rev')
  , revNapkin = require('gulp-rev-napkin');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', function () {
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  // Ignore files that may reference assets. We'll rev them next.
  var ignoreThese = '!' + path.join(buildPath,'/**/*+(css|js|json|html|txt|xml|map)')

  return gulp.src([path.join(buildPath,'/**/*'), ignoreThese])
    .pipe(rev())
    .pipe(gulp.dest(buildPath))
    .pipe(revNapkin({ verbose: false }))
    .pipe(rev.manifest(path.join(buildPath, 'rev-manifest.json'), { merge: true }))
    .pipe(gulp.dest(''))
})
