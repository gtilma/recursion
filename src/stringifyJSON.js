// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  var toJSONstring = function(obj) {
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
      result += obj;
    }
    if (typeof obj === 'string') {
      result += '\"' + obj + '\"';
    }
    if (Array.isArray(obj)) {
      if (obj.length > 0) {
        for (var i = 0; i < obj.length; i++) {
          result += '[' + toJSONstring(obj[i]) + ']';
        }
      } else {
        result += '[]';
      }
    }
  };
  toJSONstring(obj);
  return result;
};
