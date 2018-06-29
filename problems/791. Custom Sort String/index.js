// Source : https://leetcode.com/problems/custom-sort-string/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
***/


var customSortString  = module.exports = function(S, T) {
    const countsLetters = {};
    for (var i = 0; i < T.length; i++) {
        var letter = T[i];
        if(countsLetters[letter]) {
            countsLetters[letter] +=1 ;
        } else {
            countsLetters[letter] =1;
        }
    }
    
    var ans = [];
    for (var i = 0; i < S.length; i++) {
        var letter = S[i];
        ans.push(letter.repeat(countsLetters[letter]));
        countsLetters[letter] = 0;
    }
    
    Object.keys(countsLetters).forEach((k) => {
        
        ans.push(k.repeat(countsLetters[k]))
    })
    
    return ans.join('');

};