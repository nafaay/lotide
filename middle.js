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

const middle = function(array1){
  let middleArray=[];
  let lengthArray = array1.length;
  if(lengthArray <= 2){
    middleArray = [];
  }
  else if(array1.length %2 !== 0){
    middleArray.push(array1[Math.floor(lengthArray/2)]);
  }
  else{
    middleArray.push(array1[Math.floor(lengthArray/2) -1]);
    middleArray.push(array1[Math.floor(lengthArray/ 2)]);
  }
  return middleArray;  
}

console.log(middle([1, 2]));
