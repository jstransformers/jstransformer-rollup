# jstransformer-rollup

[Rollup](https://github.com/rollup/rollup) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-rollup/master.svg)](https://travis-ci.org/jstransformers/jstransformer-rollup)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-rollup/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-rollup)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-rollup/master.svg)](http://david-dm.org/jstransformers/jstransformer-rollup)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-rollup.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-rollup.svg)](https://www.npmjs.org/package/jstransformer-rollup)

## Installation

    npm install jstransformer-rollup

## API

`index.js`
```js
import rollup from './other-file'
rollup()
```

`other-file.js`
```js
export default function rollup() {
  console.log('hi')
}
```


```js
var rollup = require('jstransformer')(require('jstransformer-rollup'));

rollup.renderFileAsync('index.js', {
  // options here passed to rollup.rollup and bundle.generate
  // https://github.com/rollup/rollup/wiki/JavaScript-API
}).body
//=> 'function rollup() {\n  console.log('hi')\n}\nrollup()'
```

## License

MIT
