// FUNCTION IMPLEMENTATION: takes in 2 values and returns true if they are equal and false otherwise
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;


// FUNCTION IMPLEMENTATION: takes in an object and callback and returns the first key that meets the criteria specified in callback
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) 
    return key;
  }
};

module.exports = findKey;

// TEST CODE
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"