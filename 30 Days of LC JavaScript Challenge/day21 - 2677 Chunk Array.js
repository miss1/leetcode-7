/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let res = [], chunk = [];
  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    if ((i + 1) % size === 0) {
      res.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length > 0) res.push(chunk);
  return res;
};


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk2 = function(arr, size) {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i + size));
    i += size;
  }
  return res;
};