/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * BFS
 * time: O(mn)
 * space: O(mn)
 */
var floodFill = function(image, sr, sc, color) {
  let array = [[sr, sc]], target = image[sr][sc];
  if (target === color) return image;
  image[sr][sc] = color;
  while (array.length > 0) {
    let newArray = [];
    for (let n of array) {
      let x = n[0], y = n[1];
      if (x > 0 && image[x - 1][y] === target) {
        newArray.push([x - 1, y]);
        image[x - 1][y] = color;
      }
      if (x < image.length - 1 && image[x + 1][y] === target) {
        newArray.push([x + 1, y]);
        image[x + 1][y] = color;
      }
      if (y > 0 && image[x][y - 1] === target) {
        newArray.push([x, y - 1]);
        image[x][y - 1] = color;
      }
      if (y < image[0].length - 1 && image[x][y + 1] === target) {
        newArray.push([x, y + 1]);
        image[x][y + 1] = color;
      }
    }
    array = newArray;
  }
  return image;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * DFS
 * time: O(mn)
 * space: O(mn)
 */
var floodFill2 = function(image, sr, sc, color) {
  let target = image[sr][sc];
  if (image[sr][sc] === color) return image;
  const dfs = function(x, y) {
    image[x][y] = color;
    if (x > 0 && image[x - 1][y] === target) dfs(x - 1, y);
    if (x < image.length - 1 && image[x + 1][y] === target) dfs(x + 1, y);
    if (y > 0 && image[x][y - 1] === target) dfs(x, y - 1);
    if (y < image[0].length - 1 && image[x][y + 1] === target) dfs(x, y + 1);
  };
  dfs(sr, sc);
  return image;
};