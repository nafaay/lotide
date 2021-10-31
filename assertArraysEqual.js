const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  else {
    
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}

const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1, array2)){
    console.log("Passed");
  }
  else{
    console.log("Failed");
  }
}

console.log(assertArraysEqual([1, 2, 3],[1, 2, 3]));
console.log(assertArraysEqual([1, 2, 5], [1, 2, 3]));



