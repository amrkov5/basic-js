const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const commandSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  const result = [];
  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      i += 2;
    }
    if (arr[i] === '--discard-prev') {
      if (result.includes(arr[i - 1])) {
        result.pop();
      }
      i += 1;
    }
    if (arr[i] === '--double-next') {
      i += 1;
      if (i < arr.length) {
        result.push(arr[i]);
      }
    }
    if (arr[i] === '--double-prev' && result.length > 0) {
      if(result.includes(arr[i - 1])) {
        result.push(result[result.length - 1]);
      }
      i += 1;
    }
    if (i < arr.length && !(commandSequences.includes(arr[i]))) {
      result.push(arr[i]);
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
