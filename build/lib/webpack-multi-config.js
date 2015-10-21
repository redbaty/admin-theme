var config = require('../config')
if (!config.tasks.js) return

var path            = require('path')
  , webpack         = require('webpack')
  , webpackManifest = require('./webpackManifest')

module.exports = function (env) {
  var buildPath = process.env.NODE_ENV === 'production' ? config.root.dest : config.root.build
  var jsSrc = path.resolve(config.root.src, config.tasks.js.src)
    , jsDest = path.resolve(buildPath, config.tasks.js.dest)
    , bowerPath = path.resolve(config.root.bower)
    , publicPath = path.join(config.tasks.js.src, '/')
    , filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js'
    , extensions = config.tasks.js.extensions.map(function (extension) {
    return '.' + extension
  })

  var webpackConfig = {
    addVendor: function (name, vendorPath) {
      this.resolve.alias[name] = bowerPath + vendorPath
      this.module.noParse.push(new RegExp(vendorPath));
    },
    context: jsSrc,
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jQuery'
      })
    ],
    resolve: {
      alias: {},
      extensions: [''].concat(extensions),
      modulesDirectories: config.tasks.js.modulesDirectories
    },
    module: {
      noParse: [],
      loaders: [
        {
          test: /\.js$/,
          loader: 'imports?this=>window',
          exclude: /node_modules|bower_components/
        }
      ]
    }
  }

  if (env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = config.tasks.js.entries
    webpackConfig.output = {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath
    }

    if (config.tasks.js.extractSharedJs) {
      // Factor out common dependencies into a vendors.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin('vendors', filenamePattern, Infinity)
      )
    }
  }

  if (env === 'development') {
    webpackConfig.devtool = 'source-map'
    webpack.debug = true
  }

  if (env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, config.root.dest),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  webpackConfig.addVendor('jquery', '/jquery/dist/jquery.js')
  webpackConfig.addVendor('bootstrap', '/bootstrap/dist/js/bootstrap.js')

  return webpackConfig
}
