
module.exports = function(n) {
	if (n < 1 || !n) {
		return null;
	}
	var board = [];
	for (var i = 0; i < n; i++) {
		board.push([]);
		for (var j = 0; j < n; j++) {
			board[i].push(undefined);
		}
	}
	return board;
};
