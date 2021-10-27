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

const assertArraysEqual = function (array1, array2) {
  return eqArrays(array1, array2);
}

const flatten = function(ourArray){
  let flattArray = [];
  for(arr of ourArray){
    if (Array.isArray(arr)){
       for(ar of arr){
         flattArray.push(ar);
       }
    }
    else{
      flattArray.push(arr);
    }
  }
  return flattArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

