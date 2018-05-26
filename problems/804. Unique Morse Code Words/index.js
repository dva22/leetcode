// Source : https://leetcode.com/problems/unique-morse-code-words/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
***/

var uniqueMorseRepresentations = module.exports = function(words) {
  const mapping = [".-","-...","-.-.","-..",".","..-.","--.","....",
  					"..",".---","-.-",".-..","--","-.","---",".--.",
  					"--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  const charToIndex = char => char.charCodeAt(0) - 97;

  return new Set(
  	words.map(word => 
  		word.split('').reduce(
  			(morseCode, cur) => 
  				morseCode + mapping[charToIndex(cur)], ''
  			)
  		)
  	).size;
};
 