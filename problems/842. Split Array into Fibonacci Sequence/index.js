// Source : https://leetcode.com/problems/split-array-into-fibonacci-sequence/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

Example 1:

Input: "123456579"
Output: [123,456,579]
***/


var splitIntoFibonacci = module.exports = function(S) {
    const MAX = 2 ** 31 - 1
    function run(cur, next, s, list) {
        if (s.length === 0) return list
        if (cur + next > MAX) return false
        let tgt = `${cur + next}`
        if (s.startsWith(tgt)) {
            return run(next, cur + next, s.slice((cur + next).toString().length), [...list, cur + next])
        }
        return false
    }
    for (let i = 1; i < S.length / 2; i++) {
        for (let j = i + 1; j < S.length; j++) {
            let ret = run(parseInt(S.slice(0, i)), parseInt(S.slice(i, j)), S.slice(j), [parseInt(S.slice(0, i)), parseInt(S.slice(i, j))])
            if (ret && ret.length > 2) return ret
        }
    }
    return []
};
 