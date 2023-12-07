/**
 * @param {number[]} nums
 * @return {number}
 * 数组
 * time: O(n)
 * space: O(1)
 */
var thirdMax = function(nums) {
	let first = nums[0], second = -Infinity, third = -Infinity;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > first) {
			third = second;
			second = first;
			first = nums[i];
		} else if (nums[i] > second && nums[i] !== first) {
			third = second;
			second = nums[i];
		} else if (nums[i] < second && nums[i] > third) {
			third = nums[i];
		}
	}
	return third === -Infinity ? first : third;
};