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

const letterPositions = function(sentence){
  const result = {};
  const arr = [];
  for(let i=0; i<sentence.length; i++){
    if(sentence[i] !== " "){
      result[sentence[i]] = arr.push(i);
    }
  }
  return result;
}

console.log(letterPositions("Hello world"));

module.exports = letterPositions;