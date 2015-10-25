var config       = require('../config')
if (!config.tasks.html) return

var fs           = require('fs')
  , path         = require('path')
  , front        = require('front-matter')
  , globule      = require('globule')
  , objAssign    = require('object-assign')
  , handleErrors = require('./handleErrors')

var package = require('../../package.json')
  , isProduction = process.env.NODE_ENV === 'production'

var readDataJson = function (fileName) {
  var filePath = path.resolve(config.root.assets, fileName)
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

module.exports = function (file) {
  var fmContent = front(file.contents.toString())
    , dataJson = objAssign(readDataJson(config.tasks.html.dataFile), {
        app: {
          version: package.version,
          description: package.description,
          url: isProduction ? package.homepage : config.root.url,
          license: package.license
        }
      })

  var dataExtras = config.tasks.html.dataIncludes
  if (typeof dataExtras !== 'Array') {
    dataExtras = [dataExtras]
  }

  dataExtras.push('!' + config.tasks.html.dataFile)
  var extraFiles = globule.find(dataExtras, {
    srcBase: config.root.assets
  })

  file.contents = new Buffer(fmContent.body)
  dataJson.page = fmContent.attributes

  extraFiles.forEach(function (extra) {
    var basename = path.basename(extra, '.json')
      , key = basename.replace('data-', '')
    if (basename !== 'data-app') {
      dataJson[key] = readDataJson(basename + '.json')
    }
  })

  dataJson.navs.sidebar.forEach(function (sideNav, i) {
    var activeNav = '/' + file.relative.replace('swig', 'html')
    if (sideNav.url === activeNav) {
      dataJson.navs.sidebar[i].active = true
      // console.log(dataJson.navs.sidebar[i])
    }
  })

  return dataJson
}
