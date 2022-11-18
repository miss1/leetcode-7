/**
 * @param {string[]} emails
 * @return {number}
 * time: O(n)
 * space: O(n)
 */
var numUniqueEmails = function(emails) {
  let set = new Set();
  for (let email of emails) {
    let arr = email.split('@');
    arr[0] = arr[0].replace(/\./g, '');
    set.add(arr[0].split('+')[0] + '@' + arr[1]);
  }
  return set.size;
};