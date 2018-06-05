// Source : https://leetcode.com/problems/longest-mountain-in-array/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

B.length >= 3
There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
(Note that B could be any subarray of A, including the entire array A.)

Given an array A of integers, return the length of the longest mountain. 

Return 0 if there is no mountain.

 

Example 1:

Input: [2,1,4,7,3,2,5]
Output: 5
***/

var longestMountain = module.exports  = function(A) {

    let n = A.length;
    let inc = Array(n).fill(0);
    let dec = Array(n).fill(0);
    
    for(let i = 0; i < n; i++){

        if(i == 0 || A[i] <= A[i - 1]){
            inc[i] = 0;
        }
        else{
            inc[i] = inc[i - 1] + 1;
        }

    }

    for(let i = n - 1; i >= 0; i--){
        
        if(i == n - 1 || A[i] <= A[i + 1]){
            dec[i] = 0;
        }
        else{
            dec[i] = dec[i + 1] + 1;
        }

    }

    let m = 0;
    for(let i = 0; i < n; i++){

        if(inc[i] > 0 && dec[i] > 0)
        {
            m = Math.max(m, inc[i] + dec[i] + 1);
        }

    }

    return m;
};
