this["EJS"] = this["EJS"] || {};
this["EJS"]["test/fixtures/template.html"] = function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<head><title><%= title %></title></head>", filename: undefined };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':' 
    + lineno + '\n' 
    + context + '\n\n' 
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) {
 buf.push('<head><title>', escape((__stack.lineno=1,  title )), '</title></head>');
}
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
};