const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE 
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL