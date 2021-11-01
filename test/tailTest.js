// CODE TEST
const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 4, 3, 4]), [2, 3, 4]);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


