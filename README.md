# verb-check [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Check if a word is a verb or not.

## Installation

```sh
$ npm install --save verb-check
```

## Usage

```js
const verbCheck = require('verb-check');

verbCheck.check('Rainbow');
// Returns false

verbCheck.check('won');
// Returns true
```
## License

Apache-2.0 © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/verb-check.svg
[npm-url]: https://npmjs.org/package/verb-check
[travis-image]: https://travis-ci.org/RobertJGabriel/verb-check.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/verb-check
[daviddm-image]: https://david-dm.org/RobertJGabriel/verb-check.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/verb-check
[coveralls-image]: https://coveralls.io/repos/RobertJGabriel/verb-check/badge.svg
[coveralls-url]: https://coveralls.io/r/RobertJGabriel/verb-check
