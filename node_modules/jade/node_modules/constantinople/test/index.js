'use strict'

var assert = require('assert')
var constaninople = require('../')

describe('isConstant(src)', function () {
  it('handles "[5 + 3 + 10]"', function () {
    assert(constaninople.isConstant('[5 + 3 + 10]') === true)
  })
  it('handles "/[a-z]/.test(\'a\')"', function () {
    assert(constaninople.isConstant('/[a-z]/.test(\'a\')') === true)
  })
  it('handles "{\'class\': [(\'data\')]}"', function () {
    assert(constaninople.isConstant('{\'class\': [(\'data\')]}') === true)
  })
  it('handles "Math.random()"', function () {
    assert(constaninople.isConstant('Math.random()') === false)
  })
  it('handles "Math.random("', function () {
    assert(constaninople.isConstant('Math.random(') === false)
  })
})


describe('toConstant(src)', function () {
  it('handles "[5 + 3 + 10]"', function () {
    assert.deepEqual(constaninople.toConstant('[5 + 3 + 10]'), [5 + 3 + 10])
  })
  it('handles "/[a-z]/.test(\'a\')"', function () {
    assert(constaninople.toConstant('/[a-z]/.test(\'a\')') === true)
  })
  it('handles "{\'class\': [(\'data\')]}"', function () {
    assert.deepEqual(constaninople.toConstant('{\'class\': [(\'data\')]}'), {'class': ['data']})
  })
  it('handles "Math.random()"', function () {
    try {
      constaninople.toConstant('Math.random()')
    } catch (ex) {
      return
    }
    assert(false, 'Math.random() should result in an error')
  })
  it('handles "Math.random("', function () {
    try {
      constaninople.toConstant('Math.random(')
    } catch (ex) {
      return
    }
    assert(false, 'Math.random( should result in an error')
  })
})