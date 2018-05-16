// Source : https://leetcode.com/problems/expressive-words/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  Here, we have groups, of adjacent letters that are all the same character, and adjacent characters to the group are different.  A group is extended if that group is length 3 or more, so "e" and "o" would be extended in the first example, and "i" would be extended in the second example.  As another example, the groups of "abbcccaaaa" would be "a", "bb", "ccc", and "aaaa"; and "ccc" and "aaaa" are the extended groups of that string.

For some given string S, a query word is stretchy if it can be made to be equal to S by extending some groups.  Formally, we are allowed to repeatedly choose a group (as defined above) of characters c, and add some number of the same character c to it so that the length of the group is 3 or more.  Note that we cannot extend a group of size one like "h" to a group of size two like "hh" - all extensions must leave the group extended - ie., at least 3 characters long.

Given a list of query words, return the number of words that are stretchy. 

Example:
Input: 
S = "heeellooo"
words = ["hello", "hi", "helo"]
Output: 1
***/

var expressiveWords = module.exports = function(S, words) {
    let count = 0;
        for (w of words) {
            let i, j;
            for (i = 0, j = 0; i < S.length; ++i) {
                if (j < w.length && S[i] == w[j]) { 
                    ++j;
                }else if (i > 0 && S[i - 1] == S[i] && i + 1 < S.length && S[i] == S[i + 1]) {++i;} else if (!(i > 1 && S[i] == S[i - 1] && S[i] == S[i - 2])) {
                    break;
                }
            }
            if (i == S.length && j == w.length) { ++count; }
        }
        return count;
};
 