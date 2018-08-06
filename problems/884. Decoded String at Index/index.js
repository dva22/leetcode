// Source : https://leetcode.com/problems/decoded-string-at-index/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:

If the character read is a letter, that letter is written onto the tape.
If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string. 

Example 1:

Input: S = "leet2code3", K = 10
Output: "o"
***/

var decodeAtIndex = module.exports  = function(S, K) {
            let n = S.length;
	        let dp = Array(n+1).fill(0);
	        for(let i = 0;i < n;i++){
	        	if(S[i] >= '2' && S[i] <= '9'){
	        		dp[i+1] = dp[i] * (S[i]-'0');
	        	}else{
	        		dp[i+1] = dp[i] + 1;
	        	}
	        }
	        K--;
	        for(let i = n-1;i >= 0;i--){
	        	K %= dp[i+1];
	        	if(K+1 == dp[i+1] && !(S[i] >= '2' && S[i] <= '9')){
	        		return "" + S[i];
	        	}
	        }
	        return null;
};