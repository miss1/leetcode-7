/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 * time: O(1)
 * space: O(1)
 */
var ParkingSystem = function(big, medium, small) {
  this.type = [0, big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (this.type[carType] > 0) {
    this.type[carType] -= 1;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */