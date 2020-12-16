/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let arr = s.split(' ')
  let obj = {}

  if (arr.length !== pattern.length) return false
  for(let i = 0; i < arr.length; i++) {
    let k = pattern.charAt(i)
    if (!obj[k]) {
      if (Object.keys(obj).filter(item => obj[item] === arr[i]).length) return false
      obj[k] = arr[i]
    } else if (obj[k] !== arr[i]) {
      return false
    }
  }
  return true
};

// "abba"
// "dog dog dog dog"

var pattern = "jquery",
// str = "dog dog dog dog"
str = "jquery"

console.log(wordPattern(pattern, str))




// 官方实现

var wordPattern = function(pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(' ');
  if (pattern.length !== words.length) {
      return false;
  }
  for (const [i, word] of words.entries()) {
      const ch = pattern[i];
      if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
          return false;
      }
      word2ch.set(word, ch);
      ch2word.set(ch, word);
  }
  return true;
};
