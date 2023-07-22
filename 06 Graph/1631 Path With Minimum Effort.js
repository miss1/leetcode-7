/**
 * @param {number[][]} heights
 * @return {number}
 * Dijkstra’s algorithm 寻找单源最短路径。这里将最短路径改成maximum absolute difference
 *
 */
var minimumEffortPath = function(heights) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const m = heights.length, n = heights[0].length;
  let record = new Array(m).fill(Infinity).map(val => new Array(n).fill(Infinity));
  let visited = new Array(m).fill(false).map(val => new Array(n).fill(false));
  record[0][0] = 0;

  let pq = [[0, 0, 0]];
  const insetPq = function(val) {
    let low = 0, high = pq.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (pq[mid][2] < val[2]) high = mid;
      else low = mid + 1;
    }
    pq.splice(low, 0, val);
  };

  while (pq.length > 0) {
    const [x, y, effort] = pq.pop();
    visited[x][y] = true;
    if (x === m - 1 && y === n - 1) return effort;

    for (let d of directions) {
      let nextX = x + d[0], nextY = y + d[1];
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || visited[nextX][nextY]) continue;

      let newEffort = Math.abs(heights[x][y] - heights[nextX][nextY]);
      let maxDiff = Math.max(newEffort, record[x][y]);
      if (record[nextX][nextY] > maxDiff) {
        record[nextX][nextY] = maxDiff;
        insetPq([nextX, nextY, maxDiff]);
      }
    }
  }

  return record[m - 1][n - 1];
};