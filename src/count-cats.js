const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix[i].length; k += 1){
      if (matrix[i][k] == '^^') {
        result += 1;
      }
    }
  }
  return result
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(countCats([[0, 1, '^^'],[0, '^^k', 2],['^^', 1, 2]]))
module.exports = {
  countCats
};
