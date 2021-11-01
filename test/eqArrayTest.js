
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays'); 

// CODE TEST
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true);



