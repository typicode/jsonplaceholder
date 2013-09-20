var uglify = require('uglify-js')


module.exports = addWith

function addWith(obj, src, exclude) {
  exclude = exclude || []
  exclude = exclude.concat(detect(obj))
  var vars = detect('(function () {' + src + '}())')//allows the `return` keyword
    .filter(function (v) {
      return !(v in global) && exclude.indexOf(v) === -1
    })

  if (vars.length === 0) return src

  var declareLocal = ''
  var local = 'locals'
  if (/^[a-zA-Z0-9$_]+$/.test(obj)) {
    local = obj
  } else {
    while (vars.indexOf(local) != -1 || exclude.indexOf(local) != -1) {
      local += '_'
    }
    declareLocal = local + ' = (' + obj + '),'
  }
  return 'var ' + declareLocal + vars
    .map(function (v) {
      return v + ' = ' + local + '.' + v
    }).join(',') + ';' + src
}

function detect(src) {
    var ast = uglify.parse(src.toString())
    ast.figure_out_scope()
    var globals = ast.globals
        .map(function (node, name) {
            return name
        })
    return globals;
}