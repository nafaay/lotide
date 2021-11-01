const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 3, 4];
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


const eqArrays = function(array1, array2){
    if(array1.length !== array2.length){
      return false;
    }
    else{
      for(let i=0; i<array1.length; i++){
        if(array1[i] !== array2[i]){
          return false;
        }
      }
      return true;
    }
  }
const assertArraysEqual = function(array1, array2){
    return eqArrays(array1, array2);
}


const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

  callback = function(item){
      return item;
  }

  //console.log(map(words, callback));

  console.log(assertArraysEqual(map(words, callback), [1, 3, 4], true));
  console.log(assertArraysEqual(map(numbers, callback), [1, 3, 4], true));

  module.exports = map;