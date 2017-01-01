'use strict'

var rollup = require('rollup')

exports.name = 'rollup'
exports.inputFormats = ['js']
exports.outputFormat = 'js'

exports.renderFileAsync = function (filename, options) {
  options = options || {}
  options.entry = filename
  if (options.plugins) {
    if (!Array.isArray(options.plugins)) {
      let newPlugins = []
      for (let plugin in options.plugins) {
        if ({}.hasOwnProperty.call(options.plugins, plugin)) {
          let pluginOptions = options.plugins[plugin]
          // eslint-disable-next-line import/no-dynamic-require
          newPlugins.push(require(plugin)(pluginOptions))
        }
      }
      options.plugins = newPlugins
    }
  }
  return new Promise(function (resolve, reject) {
    rollup.rollup(options)
      .then(function (bundle) {
        var result = bundle.generate(options)
        resolve(result.code)
      }).catch(function (err) {
        reject(err)
      })
  })
}
