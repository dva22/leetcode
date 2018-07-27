// Source : https://leetcode.com/problems/letter-case-permutation/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
***/
module.exports = letterCasePermutation = S => {
    const result = [];
    backtracking(S, 0, '', result);
    return result;
};

const backtracking = (S, i, solution, result) => {
    if (i === S.length) {
        result.push(solution);
        return;
    }
    
    backtracking(S, i + 1, solution + S[i].toLowerCase(), result);
    
    if (/[a-zA-Z]/.test(S[i])) {
        backtracking(S, i + 1, solution + S[i].toUpperCase(), result);
    }
};
