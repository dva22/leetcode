// Source : https://leetcode.com/problems/sliding-puzzle/description/
// Author : Dubchak Valery

/***
On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:

Input: board = [[1,2,3],[4,0,5]]
Output: 1

***/

var slidingPuzzle = module.exports = function(board) {
    let [moves, used, cnt, new_q] = [{0: [1, 3], 1:[0, 2, 4], 2:[1, 5], 3:[0, 4], 4:[1, 3, 5], 5:[2, 4]}, new Set(), 0];
    let s = board[0].concat(board[1]).join(""), q = [[s, s.indexOf("0")]];
    while (q.length) {
        new_q = [];
        for (i in q) {
            let [s, ind] = q[i];
            used.add(s);
            if (s == "123450") {
                return cnt;
            }
            let arr = s.split("");
            for (j in moves[ind]) {
                let new_arr = Array.from(arr);
                [new_arr[ind], new_arr[moves[ind][j]]] = [new_arr[moves[ind][j]], new_arr[ind]];
                let new_s = new_arr.join("");
                if (!used.has(new_s)) {
                    new_q.push([new_s, moves[ind][j]]);
                }
            }
        }
        cnt += 1, q = new_q;
    }
    return -1;
};