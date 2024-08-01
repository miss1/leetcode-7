/**
 * @param {string[]} details
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
var countSeniors = function(details) {
  return details.reduce((acc, detail) => acc + (Number(detail[11] + detail[12]) > 60 ? 1 : 0), 0);
};