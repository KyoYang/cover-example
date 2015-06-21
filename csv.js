function preproccess(str, escape) {
  if (escape) {
    return '"' + str + '"';
  } else {
    return str;
  }
}

module.exports = function(params, options) {
  options = options || {};
  var lines = [];
  var headers = Object.keys(params[0]);
  var sep = options.sep || ',';
  var esc = options.escape === undefined ? true : options.escape;
  lines.push(headers.map(function(col) {
    return preproccess(col, esc);
  }).join(sep));
  params.forEach(function(row) {
    lines.push(headers.map(function(col) {
      return preproccess(row[col], esc);
    }).join(sep));
  });
  return lines.join('\n');
};
