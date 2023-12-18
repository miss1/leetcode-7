/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
  this.foodMap = new Map();
  this.pq = new Map();
  for (let i = 0; i < foods.length; i++) {
    this.foodMap.set(foods[i], [cuisines[i], ratings[i]]);
    if (!this.pq.has(cuisines[i])) {
      let q = new MaxPriorityQueue({compare: (a, b) => (a.rating === b.rating) ? a.name.localeCompare(b.name) : (b.rating - a.rating)});
      this.pq.set(cuisines[i], q);
    }
    this.pq.get(cuisines[i]).enqueue({rating: ratings[i], name: foods[i]});
  }
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
  const f = this.foodMap.get(food);
  f[1] = newRating;
  this.pq.get(f[0]).enqueue({rating: newRating, name: food});
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
  const queue = this.pq.get(cuisine);
  while (true) {
    const food = queue.front();
    if (food.rating === this.foodMap.get(food.name)[1]) return food.name;
    queue.dequeue();
  }
  return '';
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */