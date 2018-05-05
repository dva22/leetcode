// Source : https://leetcode.com/problems/goat-latin/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
***/

var toGoatLatin  = module.exports = function(S) {
        
    let sArrs = S.split(' ');
    let returnStr = "";
    let letterA = "";
    for (sArr of sArrs) {
        letterA += "a";

        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(sArr[0]) == -1) {
            returnStr += sArr.substring(1) + sArr[0];
        } else {
            returnStr += sArr;
        }
        
        returnStr += 'ma' + letterA + ' ';
    }

    return returnStr.trim();

};