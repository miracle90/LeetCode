/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let i = 0
  let first = strs[0]
  let len = strs.length
  for (let i = 0; i < first.length; i++) {
    strs
  }
  // while(strs.filter(item => first.slice(0, i + 1) === item.slice(0, i + 1)).length === len) {
  //   i++
  // }
  return first.slice(0, i)
};

var arr = ["flower","flow","floght"]
// var arr = ["dog","racecar","car"]

console.log(longestCommonPrefix(arr))