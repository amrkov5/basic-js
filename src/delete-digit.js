const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const nString = n.toString();
  for (let i = 0; i < n.toString().length; i += 1) {
    if (Number(nString.slice(0, i) + nString.slice(i + 1)) > result) {
      result = Number(nString.slice(0, i) + nString.slice(i + 1));
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  deleteDigit
};
