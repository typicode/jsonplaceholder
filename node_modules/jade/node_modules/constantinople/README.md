# constantinople

Determine whether a JavaScript expression evaluates to a constant (using UglifyJS).  Here it is assumed to be safe to underestimate how constant something is.

[![Build Status](https://travis-ci.org/ForbesLindesay/constantinople.png?branch=master)](https://travis-ci.org/ForbesLindesay/constantinople)
[![Dependency Status](https://gemnasium.com/ForbesLindesay/constantinople.png)](https://gemnasium.com/ForbesLindesay/constantinople)
[![NPM version](https://badge.fury.io/js/constantinople.png)](http://badge.fury.io/js/constantinople)

## Installation

    npm install constantinople

## Usage

```js
var isConstant = require('constantinople')

if (isConstant('"foo" + 5')) {
  console.dir(isConstant.toConstant('"foo" + 5'))
}
```

## API

### isConstant(src)

Returns `true` if `src` evaluates to a constant, `false` otherwise.  It will also return `false` if there is a syntax error, which makes it safe to use on potentially ES6 code.

### toConstant(src)

Returns the value resulting from evaluating `src`.  This method throws an error if the expression is not constant.  e.g. `toConstant("Math.random()")` would throw an error.

## License

  MIT