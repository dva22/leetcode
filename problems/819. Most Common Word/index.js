// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

Example:
Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
***/

var mostCommonWord = module.exports = function(paragraph, banned) {

    const words = paragraph.toLowerCase().split(/\W/);
   
    const mp = Object.create(null);

    words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
   
    banned.map(x => mp[x] = -1)
 
    return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
};