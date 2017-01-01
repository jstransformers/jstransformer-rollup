'use strict'

var rollup = require('rollup')

exports.name = 'rollup'
exports.inputFormats = ['js']
exports.outputFormat = 'js'

exports.renderFileAsync = function (filename, options) {
  options = options || {}
  options.rollup = options.rollup || {}
  options.generate = options.generate || {}
  options.rollup.entry = filename
  return new Promise(function (resolve, reject) {
    rollup.rollup(options.rollup)
      .then(function (bundle) {
        var result = bundle.generate(options.generate)
        resolve(result.code)
      }).catch(function (err) {
        reject(err)
      })
  })
}
