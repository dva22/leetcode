// Source : https://leetcode.com/problems/find-and-replace-pattern/description/
// Author : Dubchak Valery

/***
You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]

***/

var findAndReplacePattern = module.exports = function(words, pattern) {
    let res = [];
    for (word of words) {
        if (word.length === pattern.length) {
            let mass = new Map;
            let mass1 = new Map;
            let err = 0;
            for (let i = 0; i < word.length; i++) {
                if (!mass.has(word[i])) 
                    mass.set(word[i], pattern[i])                
                else if (mass.get(word[i]) !== pattern[i]) 
                    err = 1;
                
                if (!mass1.has(pattern[i])) 
                    mass1.set(pattern[i], word[i])
                else if (mass1.get(pattern[i]) !== word[i]) 
                    err = 1;
            }
            if (err === 0) res.push(word);
        }
    }
    return res;
};