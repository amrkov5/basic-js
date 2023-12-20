const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } 
    if (str[i] !== str[i + 1]) {
      if (count === 1) {
        result += `${str[i]}`;
      } else {
        result += `${count}${str[i]}`;
      }
      count = 1;
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
