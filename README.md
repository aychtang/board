board
=====

Module for generating n by n grids modeled as a 2d array. For people who like n x n problems.

## Interface

### board(n, values)

Returns a 2d array of size n, filled with undefined elements.

```js
var board = require('n-board');
var b = board(3);

/*
  b === [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ];
*/

var c = board(3, {dead: true});

/*
  c === [
    [
      {dead:true},
      {dead: true},
      {dead: true}
    ],
    [
      {dead:true},
      {dead: true},
      {dead: true}
    ],
    [
      {dead:true},
      {dead: true},
      {dead: true}
    ]
  ];
*/

var d = board(2, function(i, j) {
  return i + j;
});

/*
  d === [[0, 1], [1, 2]];
*/
```
