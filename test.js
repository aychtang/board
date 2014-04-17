var test = require('tape');
var board = require('./index');

// Describing board making function bahaviour.
test('should return null if n passed is 0', function(t) {
	t.equal(board(0), null);
	t.end();
});

test('should return null if no parameter is passed', function(t) {
	t.equal(board(), null);
	t.end();
});

test('should return a 2d array when n > 0', function(t) {
	t.deepEqual(board(1), [[ undefined ]]);
	t.end();
});

test('should return correct size 2d array', function(t) {
	var b = board(5);
	t.equal(b.length, 5);
	t.equal(b[0].length, 5);
	t.end();
});
