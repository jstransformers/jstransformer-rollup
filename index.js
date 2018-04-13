'use strict'

const rollup = require('rollup')

exports.name = 'rollup'
exports.inputFormats = ['js']
exports.outputFormat = 'js'

exports.renderFileAsync = function (filename, options) {
  options = options || {}
  options.entry = filename
  if (options.plugins) {
    if (!Array.isArray(options.plugins)) {
      const newPlugins = []
      for (const plugin in options.plugins) {
        if ({}.hasOwnProperty.call(options.plugins, plugin)) {
          const pluginOptions = options.plugins[plugin]
          // eslint-disable-next-line import/no-dynamic-require
          newPlugins.push(require(plugin)(pluginOptions))
        }
      }
      options.plugins = newPlugins
    }
  }
  return new Promise((resolve, reject) => {
    rollup.rollup(options)
      .then(bundle => {
        const result = bundle.generate(options)
        resolve(result.code)
      }).catch(err => {
        reject(err)
      })
  })
}
