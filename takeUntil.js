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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const arr = [];
const takeUntil = function(array, callback){

    for(elem of array){
        callback(elem);
        if (elem < 0 || elem === ","){
            break;
        }
        else{
            arr.push(elem);
        }
    }
    return arr;
};



const results1 = takeUntil(data1, x => x<0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
