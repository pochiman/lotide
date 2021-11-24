// FUNCTION IMPLEMENTATION: takes in 2 arrays and returns true if the arrays are equal and false otherwise
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


// FUNCTION IMPLEMENTATION: takes in 2 objects and return true if they are equal and false otherwise
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let element of Object.keys(object1)) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element],object2[element])) return false;
      continue;
    }
    if (typeof object1[element] === 'object' && !Array.isArray(object1[element])) {
      return eqObjects(object1[element], object2[element]);
    }
    if (object1[element] !== object2[element]) return false;
  }
  return true;
};

module.exports = eqObjects;


// FUNCTION IMPLEMENTATION: takes in 2 objects and returns true if they are equal and false otherwise
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;