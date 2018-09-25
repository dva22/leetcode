// Source : https://leetcode.com/problems/snakes-and-ladders/description/
// Author : Dubchak Valery

/***
On an N x N board, the numbers from 1 to N*N are written boustrophedonically starting from the bottom left of the board, and alternating direction each row.  For example, for a 6 x 6 board, the numbers are written as follows:


You start on square 1 of the board (which is always in the last row and first column).  Each move, starting from square x, consists of the following:

You choose a destination square S with number x+1, x+2, x+3, x+4, x+5, or x+6, provided this number is <= N*N.
(This choice simulates the result of a standard 6-sided die roll: ie., there are always at most 6 destinations.)
If S has a snake or ladder, you move to the destination of that snake or ladder.  Otherwise, you move to S.
A board square on row r and column c has a "snake or ladder" if board[r][c] != -1.  The destination of that snake or ladder is board[r][c].

Note that you only take a snake or ladder at most once per move: if the destination to a snake or ladder is the start of another snake or ladder, you do not continue moving.  (For example, if the board is `[[4,-1],[-1,3]]`, and on the first move your destination square is `2`, then you finish your first move at `3`, because you do not continue moving to `4`.)

Return the least number of moves required to reach square N*N.  If it is not possible, return -1.

Example 1:

Input: [
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,35,-1,-1,13,-1],
[-1,-1,-1,-1,-1,-1],
[-1,15,-1,-1,-1,-1]]
Output: 4

***/

var snakesAndLadders = module.exports = function(board) {
  const N = board.length;
  const NN = N*N;
  // get board item at given step
  const get = step => {
    const row = N - Math.ceil(step/N);
    const col = (N-row-1)%2===0
      ? (step-1) % N
      : N-1 - (step-1) % N;
    return board[row][col];
  };
  const visited = new Map();
  let depth = 0;
  let minDepth = Number.MAX_VALUE;
  const dfs = step => {
    // reached end of board
    if (step === NN) {
      minDepth = Math.min(minDepth, depth);
      return;
    }
    depth++;
    // already tried this route with similar speed?
    if (visited.get(step) <= depth) {
      depth--;
      return;
    }
    visited.set(step, depth);
    // check all possible moves
    // 1. Move onto any snake or ladder
    // 2. Move onto the last available normal space
    let lastNormalStep = undefined;
    for (let i=step+1; i<=Math.min(step+6, NN); i++) {
      if (get(i) !== -1) dfs(get(i));
      else lastNormalStep = i;
    }
    if (lastNormalStep) dfs(lastNormalStep);
    depth--;
  };
  dfs(1);
  return minDepth === Number.MAX_VALUE ? -1 : minDepth;
};