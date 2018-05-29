// Source : https://leetcode.com/problems/guess-the-word/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
This problem is an interactive problem new to the LeetCode platform.

We are given a word list of unique words, each word is 6 letters long, and one word in this list is chosen as secret.

You may call master.guess(word) to guess a word.  The guessed word should have type string and must be from the original list with 6 lowercase letters.

This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word.  Also, if your guess is not in the given wordlist, it will return -1 instead.

For each test case, you have 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or less calls to master.guess and at least one of these guesses was the secret, you pass the testcase.

Besides the example test case below, there will be 5 additional test cases, each with 100 words in the word list.  The letters of each word in those testcases were chosen independently at random from 'a' to 'z', such that every word in the given word lists is unique.

Example 1:
Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"]

Explanation:

master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
***/


var findSecretWord = module.exports = function(wordlist, master) {
        wordlist.sort();
        lst = [];
        for (let i = 0; i < wordlist.length; ++i)
            lst.push(wordlist[i]);
        for (let i = 0; i < 10; ++i) {
            let r = master.guess(lst[0]);
            if (r == 6) return;
            newList = [];
            for (let j = 1; j < lst.length; ++j) {
                let ct = 0;
                for (let k = 0; k < 6; ++k) {
                    if (lst[j].charAt(k) == lst[0].charAt(k)) {
                        ct ++;
                    }
                }
                if (ct == r) {
                    newList.push(lst[j]);
                }
            }
            lst = newList;
        }
};
 