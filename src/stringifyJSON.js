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
    var tempArray = [];
    result += '[';

    for (var i = 0; i < obj.length; i++) {
      tempArray.push(stringifyJSON(obj[i]));
    }

    result += tempArray.join();
    result += ']';
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
