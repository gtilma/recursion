// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    result += obj;
  }

  if (typeof obj === 'string') {
    result += '\"' + obj + '\"';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 1) {
      result += '[' + stringifyJSON(obj[0]) + ']';
    }
    if (obj.length > 1) {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        result += stringifyJSON(obj[i]);
        if (i < obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
    }
    if (obj.length === 0) {
      result += '[]';
    }
  }

  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    var objArray = [];
    result += '{';

    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof (obj[key]) === 'undefined') {
        continue;
      }
      objArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    result += objArray.join();

    result += '}';
  }

  return result;
};
