'use strict'

var rollup = require('rollup')

exports.name = 'rollup'
exports.inputFormats = ['js']
exports.outputFormat = 'js'

exports.renderFileAsync = function (filename, options) {
  options = options || {}
  options.entry = filename
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
