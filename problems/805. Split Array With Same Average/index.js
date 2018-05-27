// Source : https://leetcode.com/problems/split-array-with-same-average/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)

Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

Example :
Input: 
[1,2,3,4,5,6,7,8]
Output: true
***/

var splitArraySameAverage = module.exports = function(A) {
        let sum = 0;
        for(i of A){
            sum += i;
        }                        
        
        dp = Array(sum+1).fill(false).map(() => Array(A.length+1).fill(false));        
        dp[0][0] = true;
        
        for(let i=0; i < A.length; ++i){
            for(let j=sum - A[i];j>=0;--j){
                for(let k=A.length-2;k>=0;--k){
                    if(dp[j][k]){                        
                        dp[j + A[i]][k+1] = true;
                        if((j + A[i]) * (A.length - k - 1) == (sum - j - A[i]) * (k + 1)){                                                   
                            return true;
                        }
                    }
                }
            }
        }        
        return false;
};
 