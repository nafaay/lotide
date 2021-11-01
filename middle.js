// FUNCTION IMPLEMENTATION
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

module.exports = middle;


