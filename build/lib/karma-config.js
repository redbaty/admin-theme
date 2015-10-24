var config = require('../config')

var path = require('path')
  , karmaWebpack = require('karma-webpack')
  , webpackConfig = require('./webpack-multi-config')

var testSrc = path.join(config.root.test)
var karmaConfig = {
  frameworks: ['mocha', 'sinon-chai'],
  files: [testSrc],
  preprocessors: {},
  webpack: webpackConfig('test'),
  singleRun: process.env.TRAVIS_CI === 'true',
  reporters: ['nyan'],
  browsers: [(process.env.TRAVIS_CI === 'true' ? 'Firefox' : 'Chrome')]
}

karmaConfig.preprocessors[testSrc] = ['webpack']

module.exports = function(config) {
  config.set(karmaConfig)
}
