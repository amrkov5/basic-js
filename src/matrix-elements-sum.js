const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix[i].length; k += 1) {
      if (i == 0) {
        result += matrix[i][k];
      }
      if (i > 0 && matrix[i - 1][k] > 0) {
        result += matrix[i][k];
      }
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getMatrixElementsSum([[0, 1, 1, 2],[0, 5, 1, 0],[2, 0, 3, 3]]))
module.exports = {
  getMatrixElementsSum
};
