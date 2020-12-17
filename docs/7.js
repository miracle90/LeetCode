var findTheDifference = function(s, t) {
  let arrS = s.split('')
  let arrT = t.split('')
  for (let i = 0; i < arrT.length; i++) {
    let val = arrT[i]
    let index = arrS.indexOf(val)
    if (index > -1) {
      arrS.splice(index, 1)
      arrT.shift()
      i--
    } else {
      return val
    }
  }
};

var s = 'ae'
var t = 'aea'

console.log(findTheDifference(s, t))