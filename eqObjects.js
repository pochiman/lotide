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

// TEST CODE - Primitives As Values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

// TEST CODE - Arrays As Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false