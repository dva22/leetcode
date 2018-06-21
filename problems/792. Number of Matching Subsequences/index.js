// Source : https://leetcode.com/problems/number-of-matching-subsequences/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

Example :
Input: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
***/

var numMatchingSubseq = module.exports = function(S, words) {
    let results = 0;
    let hash = {};
    
    for (let i = 0; i < words.length; i++) {
        if (typeof hash[words[i][0]] === 'undefined') {
            hash[words[i][0]] = [];
        }
        
        hash[words[i][0]].push(words[i]);
    }
    
    for (let j = 0; j < S.length; j++){
        if(typeof hash[S[j]] === 'undefined') {
            continue;
        }
        
        let tempBucket = [...hash[S[j]]];
        hash[S[j]] = [];
        
        while (tempBucket.length > 0) {
            if (tempBucket[0].length === 1) {
                results++;
            }
            else {
                if(typeof hash[tempBucket[0][1]] === 'undefined') {
                    hash[tempBucket[0][1]] = [];
                }
                
                hash[tempBucket[0][1]].push(tempBucket[0].substring(1));
            }
            
            tempBucket.shift();
        }
    }
    
    return results;
};