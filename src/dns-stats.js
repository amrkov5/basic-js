const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const splittedDomains = domains.map((el) => el.split('.'));
  for (let i = 0; i < splittedDomains.length; i += 1) {
    let domain = '';
    for (let k = splittedDomains[i].length - 1; k >= 0; k -= 1) {
      domain += `.${splittedDomains[i][k]}`;
      if (domain in result) {
        result[domain] += 1;
      } else {
        result[domain] = 1;
      }
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// console.log(getDNSStats(['code.yandex.ru','music.yandex.ru','yandex.ru']));

module.exports = {
  getDNSStats
};
