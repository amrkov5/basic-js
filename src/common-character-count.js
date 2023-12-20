const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  s1Set = new Set(s1);
  s1Set.forEach((el) => {
    const elInS1 = s1.split('').filter((e) => e === el).length;
    const elInS2 = s2.split('').filter((e) => e === el).length;
    result += Math.min(elInS1, elInS2);
  });
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getCommonCharacterCount('abcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
