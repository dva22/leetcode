// Source : https://leetcode.com/problems/short-encoding-of-words/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given a list of words, we may encode it by writing a reference string S and a list of indexes A.

For example, if the list of words is ["time", "me", "bell"], we can write it as S = "time#bell#" and indexes = [0, 2, 5].

Then for each index, we will recover the word by reading from the reference string from that index until we reach a "#" character.

What is the length of the shortest reference string S possible that encodes the given words?

Example:

Input: words = ["time", "me", "bell"]
Output: 10
Explanation: S = "time#bell#" and indexes = [0, 2, 5].
***/

var minimumLengthEncoding = module.exports = function(words) {
     
    let good = new Set();
    words.forEach(function (it) { good.add(it) });
    
        for (let word of words) {
            for (let k = 1; k < word.length; k++) {
                good.delete(word.substring(k));
            }    
        }

        let ans = 0;
        for (let word of good) {
            ans += word.length + 1;
        }    
        return ans;
};