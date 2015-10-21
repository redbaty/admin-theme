var config    = require('../../config')
var gulp      = require('gulp')
  , path      = require('path')
  , rev       = require('gulp-rev')
  , filter    = require('gulp-filter')
  , minify    = require('gulp-minify-css')
  , revNapkin = require('gulp-rev-napkin')
  , uglify    = require('gulp-uglify')

// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', function (){
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  return gulp.src(path.join(buildPath,'/**/*.css'))
    .pipe(rev())
    .pipe(minify())
    .pipe(gulp.dest(buildPath))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(buildPath, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
