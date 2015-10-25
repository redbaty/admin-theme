var config     = require('../../config')

var path       = require('path')
  , gulp       = require('gulp')
  , revReplace = require('gulp-rev-replace')

// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', function (){
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var manifest = gulp.src(path.join(buildPath, "rev-manifest.json"))

  return gulp.src(path.join(buildPath,'/**/**.{css,js}'))
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(buildPath))
})
