const findKeyByValue = function(inputObject, value) {
  const objectKeys = Object.keys(inputObject);
  for (const key of objectKeys) {
    if (inputObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;