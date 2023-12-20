const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const matrixLine = [];
    for (let k = 0; k < matrix[i].length; k += 1) {
      let mines = 0;
      for (let j = -1; j < 2; j += 1) {
        if (i + j > -1 && i + j < matrix.length) {
          for (let l = -1; l < 2; l += 1) {
            if (k + l > -1 && k + l < matrix[i].length) {
              if (matrix[i + j][k + l] && !(i + j === i && k + l === k)) {
                mines += 1;
              }
            }
          }
        }
      }
      matrixLine.push(mines);
    }
    result.push(matrixLine);
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  minesweeper
};
