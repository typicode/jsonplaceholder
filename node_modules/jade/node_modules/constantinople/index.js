'use strict'

var uglify = require('uglify-js')

var lastSRC = '(null)'
var lastRes = true

module.exports = isConstant
function isConstant(src) {
  src = '(' + src + ')'
  if (lastSRC === src) return lastRes
  lastSRC = src
  try {
    return lastRes = (detect(src).length === 0)
  } catch (ex) {
    return lastRes = false
  }
}
isConstant.isConstant = isConstant

isConstant.toConstant = toConstant
function toConstant(src) {
  if (!isConstant(src)) throw new Error(JSON.stringify(src) + ' is not constant.')
  return Function('return (' + src + ')')()
}

function detect(src) {
  var ast = uglify.parse(src.toString())
  ast.figure_out_scope()
  var globals = ast.globals
    .map(function (node, name) {
      return name
    })
  return globals
}