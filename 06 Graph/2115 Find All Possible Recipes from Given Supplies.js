/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 * Topological sorting
 * time: O(n*m)
 * space: O(n*m)
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
  let set = new Set();
  let graph = new Map(), inDegree = new Map();
  for (let i = 0; i < recipes.length; i++) {
    const target = recipes[i];
    set.add(target);
    inDegree.set(target, inDegree.has(target) ? inDegree.get(target) + ingredients[i].length : ingredients[i].length);
    for (let d of ingredients[i]) {
      if (graph.has(d)) graph.get(d).push(target);
      else graph.set(d, [target])
      if (!inDegree.has(d)) inDegree.set(d, 0);
    }
  }

  let current = supplies, res = [];
  while (current.length > 0) {
    let nextLevel = [];
    for (let n of current) {
      if (!graph.has(n)) continue;
      for (let t of graph.get(n)) {
        inDegree.set(t, inDegree.get(t) - 1);
        if (inDegree.get(t) <= 0) {
          inDegree.delete(t);
          nextLevel.push(t);
          if (set.has(t)) res.push(t);
        }
      }
    }
    current = nextLevel;
  }
  return res
};