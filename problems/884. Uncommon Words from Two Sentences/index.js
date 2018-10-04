// Source : https://leetcode.com/contest/weekly-contest-97/problems/uncommon-words-from-two-sentences/
// Author : Dubchak Valery

/***
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

***/

var uncommonFromSentences = module.exports = function(A, B) {
    let massA = A.split(' ');
    let massB = B.split(' ');
    let words = new Map();
    
    for (a of massA) {
        if (words.has(a)) {
            words.set(a, words.get(a) + 1)
        } else {
            words.set(a, 1)
        }
    }
    
    for (b of massB) {
        if (words.has(b)) {
            words.set(b, words.get(b) + 1)
        } else {
            words.set(b, 1)
        }
    }
    
    let res = [];
    for (word of words) if (word[1] === 1) res.push(word[0])
    
    return res;
};