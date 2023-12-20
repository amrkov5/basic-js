const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numArr = String(n).split('').map((e) => Number(e));
  let sum = numArr.reduce((acc, cur) => acc + cur);
  while(sum > 9 || sum < -9) {
    sum = String(sum)
      .split('')
      .map((e) => Number(e))
      .reduce((acc, cur) => acc + cur);
  }
  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getSumOfDigits(91));
module.exports = {
  getSumOfDigits
};
