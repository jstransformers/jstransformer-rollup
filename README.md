# jstransformer-rollup

[Rollup](https://github.com/rollup/rollup) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-rollup/master.svg)](https://travis-ci.org/jstransformers/jstransformer-rollup)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-rollup/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-rollup)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-rollup/master.svg)](http://david-dm.org/jstransformers/jstransformer-rollup)
[![NPM version](https://img.shields.io/npm/v/jstransformer-rollup.svg)](https://www.npmjs.org/package/jstransformer-rollup)

## Installation

    npm install jstransformer-rollup

## API

`index.js`
```js
import foo from './other-file'
foo()
```

`other-file.js`
```js
export default function foo() {
  console.log('hi')
}
```


```js
var rollup = require('jstransformer')(require('jstransformer-rollup'));

rollup.renderFileAsync('index.js', {
  rollup: {
    // options here passed to rollup.rollup
    // https://github.com/rollup/rollup/wiki/JavaScript-API#rolluprollup-options-
  },
  generate: {
    // options here passed to bundle.generate
    // https://github.com/rollup/rollup/wiki/JavaScript-API#bundlegenerate-options-
  }
}).body
//=> 'function foo() {\n  console.log('hi')\n}\nfoo()'
```

## License

MIT
