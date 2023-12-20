const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusArr = [];
  arr.forEach((el, index) => {
    if (el === -1) {
      minusArr.push(index);
    }
  });
  arr.sort((a,b) => a - b);
  const result = arr.slice(arr.lastIndexOf(-1) + 1);
  minusArr.forEach((el) => {
    result.splice(el, 0, -1);
  })
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
module.exports = {
  sortByHeight
};
