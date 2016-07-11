var test  = require('tape');
var board = require('./index');

// Describing board making function behaviour.
// The first argument is the size of the board that should be created.

test('should return null if n passed is 0', function (t) {
  t.equal(board(0), null);
  t.end();
});

test('should return null if no parameter is passed', function (t) {
  t.equal(board(), null);
  t.end();
});

test('should return a 2d array when n > 0', function (t) {
  t.deepEqual(board(1), [[ undefined ]]);
  t.end();
});

test('should return correct size 2d array', function (t) {
  var b = board(5);
  t.equal(b.length, 5);
  t.equal(b[0].length, 5);
  t.end();
});

// Population behaviour.
// Second argument can be a value or function that returns a value.
// If the second argument is a function, it is passed the i, j of cell in
// question.

test('should return a board containing undefined elements if no value is passed', function (t) {
  t.deepEqual(board(2), [[undefined, undefined],[undefined, undefined]]);
  t.end();
});

test('should return board containing undefined elements if value passed is undefined', function (t) {
  t.deepEqual(board(2, undefined), [[undefined, undefined],[undefined, undefined]]);
  t.end();
});

test('should return board containing elements which equal value passed', function (t) {
  t.deepEqual(board(2, 1), [[1, 1],[1, 1]]);
  t.end();
});

test('should return board containing elements which are result of function passed as value', function (t) {
  t.deepEqual(board(2, function (i, j) {
    return i + j;
  }), [[0, 1],[1, 2]]);
  t.end();
});
