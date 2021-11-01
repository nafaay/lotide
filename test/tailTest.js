// CODE TEST
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE using Mocha and Chai
describe("#tail", () => {
    it("should return [2, 3] for [1, 2, 3]", () => {
      assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });
    it("should return '5' for ['5']", () => {
     assert.deepEqual(tail(['5']), '5');
    })

  });

