// Source : https://leetcode.com/problems/k-th-smallest-prime-fraction/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A sorted list A contains 1, plus some number of primes.  Then, for every p < q in the list, we consider the fraction p/q.

What is the K-th smallest fraction considered?  Return your answer as an array of ints, where answer[0] = p and answer[1] = q.

Examples:
Input: A = [1, 2, 3, 5], K = 3
Output: [2, 5]
***/

var kthSmallestPrimeFraction = module.exports = function(A, K) {
    let n = A.length;
    
    let row = 0; 
    let col = n - 1;
    
    for (let cnt_le = 0, cnt_lt = 0; true; cnt_le = 0, cnt_lt = 0) {
        for (let i = 0, j = n - 1, p = n - 1; i < n; i++) {
            while (j >= 0 && A[i] * A[n - 1 - col] > A[n - 1 - j] * A[row]) j--;
            cnt_le += (j + 1);
                
            while (p >= 0 && A[i] * A[n - 1 - col] >= A[n - 1 - p] * A[row]) p--;
            cnt_lt += (p + 1);
        }
            
        if (cnt_le < K) {
            row++;
        } else if (cnt_lt >= K) {
            col--;
        } else {
            return [A[row], A[n - 1 - col]];
        }
    }
};