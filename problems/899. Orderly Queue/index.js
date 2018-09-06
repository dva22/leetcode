// Source : https://leetcode.com/problems/orderly-queue/description/
// Author : Dubchak Valery

/***
A string S of lowercase letters is given.  Then, we may make any number of moves.

In each move, we choose one of the first K letters (starting from the left), remove it, and place it at the end of the string.

Return the lexicographically smallest string we could have after any number of moves.

 

Example 1:

Input: S = "cba", K = 1
Output: "acb"

***/

var orderlyQueue = module.exports  = function(S, K) {
    if(K>1) return S.split('').sort().join('');
    else{
        let small = S.split('').sort()[0];
        let ops = [];
        for(let i=0; i<S.length; i++){
            if(S[i]===small) ops.push(S.slice(i)+S.slice(0,i));
        }
        return ops.sort()[0];
    }
};