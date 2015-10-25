var config     = require('../../config')

var path       = require('path')
  , gulp       = require('gulp')
  , revReplace = require('gulp-rev-replace')

// 5) Update asset references in HTML
gulp.task('update-html', function (){
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var manifest = gulp.src(path.join(buildPath, "/rev-manifest.json"))

  return gulp.src(path.join(buildPath, '/**/*.html'))
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(buildPath))
})
