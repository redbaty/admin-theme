var config     = require('../../config')
var gulp       = require('gulp')
var path       = require('path')
var revReplace = require('gulp-rev-replace')

// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', function (){
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var manifest = gulp.src(path.join(buildPath, "rev-manifest.json"))

  return gulp.src(path.join(buildPath,'/**/**.{css,js}'))
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(buildPath))
})
