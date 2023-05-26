/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
  // null
  if (object === null) return 'null';
  // string
  if (typeof object === 'string') return `"${object}"`;
  // array: []
  if (Array.isArray(object)) {
    const element = object.map((ele) => jsonStringify(ele));
    return `[${element.join(',')}]`;
  }
  // object: {}
  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const valuePairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${valuePairs.join(',')}}`;
  }
  // others: true, false, number
  return String(object);
};