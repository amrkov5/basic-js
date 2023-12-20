const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(msg, key) {
    if (typeof msg === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let encryptedMsgShort = '';
    let fullKey = key;
    let cleanMsg = '';
    for (let i = 0; i < msg.length; i += 1) {
      if (msg[i].charCodeAt() > 64 && msg[i].charCodeAt() < 91) {
        cleanMsg += msg[i];
      }
    }
    if (cleanMsg.length > key.length) {
      for (let i = 0; i < cleanMsg.length - key.length; i += 1) {
        const position = (i + key.length) % key.length;
        fullKey += key[position];
    }
    }
    if (cleanMsg.length < key.length) {
      fullKey = key.slice(0, cleanMsg.length);
    }
    for (let i = 0; i < cleanMsg.length; i += 1) {
        encryptedMsgShort += `${String.fromCharCode((cleanMsg.charCodeAt(i) + fullKey[i].charCodeAt()) % 26 + 65)}`;
    }
    const msgArr = msg.split('');
    const encryptedMsgArr = encryptedMsgShort.split('');
    msgArr.forEach((el, index) => {
      if (!(el.charCodeAt() > 64 && el.charCodeAt() < 91)) {
        encryptedMsgArr.splice(index, 0, el);
      } 
    });
    if (!this.isDirect) {
      return encryptedMsgArr.reverse().join('');
    }
    return encryptedMsgArr.join('');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(msg, key) {
    if (typeof msg === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let decryptedMsgShort = '';
    let fullKey = key;
    let cleanMsg = '';
    for (let i = 0; i < msg.length; i += 1) {
      if (msg[i].charCodeAt() > 64 && msg[i].charCodeAt() < 91) {
        cleanMsg += msg[i];
      }
    }
    if (cleanMsg.length > key.length) {
      for (let i = 0; i < cleanMsg.length - key.length; i += 1) {
        const position = (i + key.length) % key.length;
        fullKey += key[position];
    }
    }
    if (cleanMsg.length < key.length) {
      fullKey = key.slice(0, cleanMsg.length);
    }
    for (let i = 0; i < cleanMsg.length; i += 1) {
      let decryptedCode = (cleanMsg.charCodeAt(i) - fullKey[i].charCodeAt()) % 26;
      if (decryptedCode < 0) {
        decryptedCode += 26;
      }
      decryptedMsgShort += `${String.fromCharCode(decryptedCode + 65)}`;
    }
    const msgArr = msg.split('');
    const decryptedMsgArr = decryptedMsgShort.split('');
    msgArr.forEach((el, index) => {
      if (!(el.charCodeAt() > 64 && el.charCodeAt() < 91)) {
        decryptedMsgArr.splice(index, 0, el);
      } 
    });
    if (!this.isDirect) {
      return decryptedMsgArr.reverse().join('');
    }
    return decryptedMsgArr.join('');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine
};
