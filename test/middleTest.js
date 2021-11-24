const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {

  it('returns [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it('returns [3, 4] for [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3, 4]);
  });
  
  it('returns [] for ["batman", "robin"]', () => {
    assert.deepEqual(middle(["batman", "robin"]), []);
  });

});


// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// // TEST CODE 
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]