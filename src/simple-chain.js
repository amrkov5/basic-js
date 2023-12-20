const chai = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // console.log(value)
    this.chain.push(`( ${value} )`);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = [];
      // delete this.chain;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.chain.join('~~');
    // delete this.chain;
    this.chain = [];
    console.log(this.chain)
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('ds'))
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())

module.exports = {
  chainMaker
};
