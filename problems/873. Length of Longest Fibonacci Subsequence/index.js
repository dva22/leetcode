// Source : https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A sequence X_1, X_2, ..., X_n is fibonacci-like if:

n >= 3
X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
Given a strictly increasing array A of positive integers forming a sequence, find the length of the longest fibonacci-like subsequence of A.  If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements.  For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)

 

Example 1:

Input: [1,2,3,4,5,6,7,8]
Output: 5
***/

var lenLongestFibSubseq = module.exports = function(A) {
    let max = 0;
    let len = A.length;
    let set = new Set(A);
    let map = {};
    var getLength = function(a, b) {
        let res = 2;
        let c = b + a;
        let newAdd = A[0];
        while (c <= A[len -1]) {
            if (map[a] != undefined && map[a].has(b) && b != newAdd) break;
            if (!set.has(c)) break;
            else {
                res++;
                if (map[b] == undefined) map[b] = new Set([c]);
                else map[b].add(c);
                newAdd = c;
                [a, b] = [b, c];
                c = b + a;
            }
        }
        return res;
    }
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            max = Math.max(max, getLength(A[i], A[j]));
        }
    }
    return max == 2 ? 0 : max;
};