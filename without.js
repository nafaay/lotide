const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  return eqArrays(array1, array2);
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  let elementFound = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        elementFound = true;
        break;
      }
    }
    if (!elementFound) {
      newArray.push(source[i]);
    }
    elementFound = false;
  }
  return newArray;
};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));