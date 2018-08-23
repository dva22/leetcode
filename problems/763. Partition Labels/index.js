// Source : https://leetcode.com/problems/partition-labels/description/
// Author : Dubchak Valery

/***
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
***/

var partitionLabels = module.exports = function(S) {
    const ht = {};
	let results = [];

    for(let i = 0; i < S.length; i++) {
    	if(!ht.hasOwnProperty(S.charAt(i))) {
    		ht[S.charAt(i)] = {min: i, max: i};
    	} else {
    		ht[S.charAt(i)].max = i;
    	}
    }

	for(char in ht) {
		if(!results.length || ht[char].min > results[results.length - 1].max) {
			results.push({min: ht[char].min, max: ht[char].max});
		} else if(ht[char].min < results[results.length - 1].max && ht[char].max > results[results.length - 1].max) {
			 results[results.length - 1].max = ht[char].max
		}
	}

	return results.map(result => {
		return result.max - result.min + 1;
	});
};