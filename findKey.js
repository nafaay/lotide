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


const findKey = function(myObject, callback){
    for(let key in myObject){
      if(callback(myObject[key])){
        return key;
      }
    }
};

console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"
