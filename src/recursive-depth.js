const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        const depth = this.calculateDepth(el);
        if (depth > result) {
          result = depth;
        }
      }
    });
    return result + 1;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([[[]]])

module.exports = {
  DepthCalculator
};
