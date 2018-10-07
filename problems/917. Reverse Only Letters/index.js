// Source : https://leetcode.com/problems/reverse-only-letters/description/
// Author : Dubchak Valery

/***
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

Example 1:

Input: "ab-cd"
Output: "dc-ba"

***/

var reverseOnlyLetters = module.exports = function(S) {
    let res = [];
    for (let i = S.length - 1; i >= 0; i--) {
        if (/^[A-Za-z]+$/.test(S[i])) {
            res.push(S[i]);
        } 
    }
    for (let i = 0; i < S.length ; i++) {
        if (!(/^[A-Za-z]+$/.test(S[i]))) {
            res.splice(i,0,S[i]);
        } 
    }
    return res.join('');
};