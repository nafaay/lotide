const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters =function(ourString){
  let cloneOurString = ourString.split("");
  cloneOurString[0] = "*";
  let objLetters = {};
  let cptLetters = 1;
  let indexLetters = 1;
  for(let str of ourString){
    if(str === " "){
      indexLetters++;
      cptLetters=1;
      continue;
    }
    for(let i=indexLetters; i<ourString.length; i++){
      if (str === ourString[i] && cloneOurString[i] !== "*"){
        cptLetters = cptLetters + 1;
        cloneOurString[i] = "*";
      }
    }
    cloneOurString[indexLetters] = "*";
    objLetters[str] = cptLetters;
    indexLetters++;
    cptLetters = 1;
  }
  return objLetters;
}

console.log(countLetters("Hello world"));
