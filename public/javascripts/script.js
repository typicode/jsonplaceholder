format = function(object, indent) {
  var res = ''

  if (_(object).isArray()) {

    res += indent + '[\n';
    var array = _(object).map(function(item) {
      return format(item, indent + '  ');
    });
    res += array.join(',\n');
    res += '\n' + indent + ']'

  } else if (_(object).isObject()) {

    res += indent + '{\n'
    var array = _(object).map(function(value, key) {
      return indent + '  ' + key + ': ' + format(value, indent + '  ');
    });
    res += array.join(',\n');
    res += '\n' + indent + '}'

  } else if (_(object).isString()) {

    return '"' + object.replace(/\n/g, '\\n').replace(/\t/g, '\\t') + '"';

  } else {

    return object;

  }
  return res;
}

var onSuccess = function(data) {
  $('.tab-pane code').text(format(data, ''));
  Prism.highlightAll();
}

var handleClick = function(e) {
  e.preventDefault();
  var url =  $(this).attr('href');
  $(this).parents('li').siblings().removeClass('active');
  $(this).parents('li').addClass('active');
  $('#url').attr('href', url).text('http://jsonplaceholder.com' + url);
  $.ajax(url).then(onSuccess);
}

$('.nav-tabs a').on('click', handleClick);
$('.nav-tabs a:first').click();
