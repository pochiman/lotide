// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;


// FUNCTION IMPLEMENTATION
const findKeyByValue = function(inputObject, value) {
  const objectKeys = Object.keys(inputObject);
  for (const key of objectKeys) {
    if (inputObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);