board
=====

Module for generating n by n grids modeled as a 2d array. For people who like n x n problems.

## Interface

### board(n)

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
```
