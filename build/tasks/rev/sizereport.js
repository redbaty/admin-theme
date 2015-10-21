var config       = require('../../config')
var gulp         = require('gulp')
var repeatString = require('../../lib/repeatString')
// var sizereport   = require('gulp-sizereport')

// 6) Report sizes
gulp.task('size-report', function () {
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var hashedFiles = '/**/*-' + repeatString('[a-z,0-9]', 8)  + '*.*'

  return gulp.src([buildPath + hashedFiles, '*!rev-manifest.json'])
    // .pipe(sizereport({
    //     gzip: true
    // }))
})
