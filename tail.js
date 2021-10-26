// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    return;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(tail([1, 4, 3, 4]), [2, 3, 4]);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


