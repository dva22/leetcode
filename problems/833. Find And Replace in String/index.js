// Source : https://leetcode.com/problems/find-and-replace-in-string/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
To some string S, we will perform some replacement operations that replace groups of letters with new ones (not necessarily the same size).

Each replacement operation has 3 parameters: a starting index i, a source word x and a target word y.  The rule is that if x starts at position i in the original string S, then we will replace that occurrence of x with y.  If not, we do nothing.

For example, if we have S = "abcd" and we have some replacement operation i = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the original string S, we will replace it with "ffff".

Using another example on S = "abcd", if we have both the replacement operation i = 0, x = "ab", y = "eee", as well as another replacement operation i = 2, x = "ec", y = "ffff", this second operation does nothing because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.

All these operations occur simultaneously.  It's guaranteed that there won't be any overlap in replacement: for example, S = "abc", indexes = [0, 1], sources = ["ab","bc"] is not a valid test case.

Example 1:

Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
Output: "eeebffff"
***/
var findReplaceString = module.exports = function(S, indexes, sources, targets) {

        let N = S.length;
        let match = Array(N).fill(-1);
        for (let i = 0; i < indexes.length; ++i) {
            let ix = indexes[i];
            if (S.substring(ix, ix + sources[i].length) == sources[i])
                match[ix] = i;
        }

       ans = [];
        let ix = 0;
        while (ix < N) {
            if (match[ix] >= 0) {
                ans.push(targets[match[ix]]);
                ix += sources[match[ix]].length;
            } else {
                ans.push(S.charAt(ix++));
            }
        }
        return ans.join("");
};   
 