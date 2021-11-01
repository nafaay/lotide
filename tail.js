// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let tailArr = arr.slice(1);
    return tailArr;
  }
};

module.exports = tail;

