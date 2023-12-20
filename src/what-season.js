const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth') || Object.getOwnPropertyNames(date).length === 1) {
    throw new Error('Invalid date!');
  }
  const dateMonth = date.getMonth();
  if (dateMonth > 10 || dateMonth < 2) {

    return 'winter';
  }
  if (dateMonth > 1 && dateMonth < 5) {
    return 'spring';
  }
  if (dateMonth > 4 && dateMonth < 8) {
    return 'summer';
  }
  if (dateMonth > 7 && dateMonth < 11) {
    return 'autumn';
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
