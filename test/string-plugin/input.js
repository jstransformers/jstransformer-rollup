// import {sayHi} from './other-file'
var {sayHi} = require('./other-file')
var foo = function () {
  sayHi()
}

foo()
