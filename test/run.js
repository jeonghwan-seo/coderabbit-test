const assert = require('assert');
const { sum, average, unique } = require('../src/utils');

assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(average([1, 2, 3]), 2);
assert.deepStrictEqual(unique([1, 1, 2, 3, 3]), [1, 2, 3]);

console.log('All tests passed.');
