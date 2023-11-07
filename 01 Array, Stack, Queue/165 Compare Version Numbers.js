/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * time: O(n)
 * space: O(n)
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let i = 0;
    while (i < v1.length || i < v2.length) {
        let a = i < v1.length ? Number(v1[i]) : 0;
        let b = i < v2.length ? Number(v2[i]) : 0;
        if (a < b) return -1;
        if (a > b) return 1;
        i++;
    }
    return 0;
};
