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


// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  let answerArray = source.filter((element) => {
    if (itemsToRemove.includes(element)) {
      return false;
    } else {
      return true;
    }
  });
  return answerArray;
};

module.exports = without;

// TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);