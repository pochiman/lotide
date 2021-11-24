// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] && (!Array.isArray(array1[i]) || !Array.isArray(array2[i]))) {
      return false;
    }
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;


// FUNCTION IMPLEMENTATION: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST CODE
const results1 = map(words, word => word[0]);
console.log(results1);