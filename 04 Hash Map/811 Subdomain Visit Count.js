/**
 * @param {string[]} cpdomains
 * @return {string[]}
 * 通过'.'截取域名获取域名的每个部分，pop出栈拼接获取每个子域名
 * 使用哈希表累计记录每个域名访问的次数
 * time: O(n), n为域名+子域名的总数
 * space: O(n)
 */
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    let s = cpdomains[i].split(' ');
    let domains = s[1].split('.');
    let count = parseInt(s[0]), d = '';
    while (domains.length > 0) {
      d = d === '' ? domains.pop() : domains.pop() + '.' + d;
      if (map.has(d)) map.set(d, map.get(d) + count);
      else map.set(d, count);
    }
  }
  let res = []
  map.forEach((val, key) => { res.push(val + ' ' + key); });
  return res;
};