var romanToInt = function(s) {
  let res = 0
  let arr = s.split('')
  let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  let keys = Object.keys(obj)
  while (arr.length) {
    if (arr.length > 1 && keys.includes(arr[0] + arr[1])) {
      res = res + obj[arr[0] + arr[1]]
      arr.shift()
      arr.shift()
    } else {
      res = res + obj[arr[0]]
      arr.shift()
    }
  }
  return res
};

// var str = 'III'
// var str = 'IV'
// var str = 'IX'
// var str = 'LVIII'
var str = 'MCMXCIV'

console.log(romanToInt(str))