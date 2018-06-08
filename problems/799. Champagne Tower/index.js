// Source : https://leetcode.com/problems/hand-of-straights/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
***/

var champagneTower = module.exports = function(poured, query_row, query_glass) {
        let A = Array(102).fill(0).map(() => Array(102).fill(0));
        A[0][0] = poured;

        for (let r = 0; r <= query_row; ++r) {
            for (let c = 0; c <= r; ++c) {

                let q = (A[r][c] - 1.0) / 2.0;
                
                if (q > 0) {
                    A[r+1][c] += q;
                    A[r+1][c+1] += q;
                }

            }
        }

        return Math.min(1, A[query_row][query_glass]);    
};
