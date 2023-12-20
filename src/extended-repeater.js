const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let sep = '+';
  let addSep = '|';
  let repTimes = 1;
  let addRepTimes = 1;
  let add = ''
  const repeatArr = [];
  const additionalRepeatArr = [];
  if (Object.hasOwn(options, 'separator')) {
    sep = `${options.separator}`;
  }
  if (Object.hasOwn(options, 'repeatTimes')) {
    repTimes = options.repeatTimes;
  }
  if (Object.hasOwn(options, 'additionRepeatTimes')) {
    addRepTimes = options.additionRepeatTimes;
  }
  if (Object.hasOwn(options, 'additionSeparator')) {
    addSep = `${options.additionSeparator}`;
  }
  if (Object.hasOwn(options, 'addition')) {
    add = `${options.addition}`;
  }
  for (let k = 0; k < addRepTimes; k += 1) {
    additionalRepeatArr.push(add);
  }
  // console.log(additionalRepeatArr)
  for (let i = 0; i < repTimes; i += 1){
    repeatArr.push(`${str}${additionalRepeatArr.join(addSep)}`);
  }
  return repeatArr.join(sep);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));
module.exports = {
  repeater
};
