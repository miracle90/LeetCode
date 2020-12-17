var isPalindrome = function(x) {
  let str = x.toString()
  return str.split('').reverse().join('') === str
};

var x = 0

console.log(isPalindrome(x))
