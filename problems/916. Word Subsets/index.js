// Source : https://leetcode.com/problems/word-subsets/description/
// Author : Dubchak Valery

/***
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.

 

Example 1:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]

***/

var wordSubsets = module.exports = function(A, B) {
            let gf = Array(26).fill(0);
	        for(b of B){
	        	let f = Array(26).fill(0);
	        	for(c of b){
	        		f[c.charCodeAt(0)-97]++;
	        	}
	        	for(let i = 0;i < 26;i++){
	        		gf[i] = Math.max(gf[i], f[i]);
	        	}
	        }
	        ret =[];
        	outer:
	        for(a of A){
	        	let f = Array(26).fill(0);
	        	for(c of a){
	        		f[c.charCodeAt(0)-97]++;
	        	}
	        	for(let i = 0;i < 26;i++){
	        		if(f[i] < gf[i])continue outer;
	        	}
	        	ret.push(a);
	        }
	        return ret;
};