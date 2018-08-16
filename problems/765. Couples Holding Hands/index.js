// Source : https://leetcode.com/problems/couples-holding-hands/description/
// Author : Dubchak Valery

/***
N couples sit in 2N seats arranged in a row and want to hold hands. We want to know the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.

The people and seats are represented by an integer from 0 to 2N-1, the couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2N-2, 2N-1).

The couples' initial seating is given by row[i] being the value of the person who is initially sitting in the i-th seat.

Example 1:

Input: row = [0, 2, 1, 3]
Output: 1

***/


var minSwapsCouples = module.exports = function(row) {
    const pos = {};
  for (let i = 0; i < row.length; i++) {
    pos[row[i]] = i;
  }

  let count = 0;
  for (let i = 1; i < row.length; i += 2) {
    while ((row[i]^1) !== row[i-1]) {
      let idx = pos[row[i]^1]^1;
      [row[i], row[idx]] = [row[idx], row[i]];
      count++;
    }
  }
  return count;
};