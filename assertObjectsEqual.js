const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
if (Object.keys(object1).length !== Object.keys(object2).length){
  return false;
}
for(key of Object.keys(object1)){
  if(object1[key] !== object2[key]){
    return false;
  }
}
return true;
};

const assertObjectsEqual = function(object1, object2){
    if(eqObjects(object1, object2)){
        console.log("Passed");
    }
    else{
        console.log("Failed");
    }
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3] };

assertObjectsEqual(cd, cd2);
assertObjectsEqual(cd, dc);
