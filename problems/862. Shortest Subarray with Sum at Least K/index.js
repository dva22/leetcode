// Source : https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

If there is no non-empty subarray with sum at least K, return -1.

 

Example 1:

Input: A = [1], K = 1
Output: 1
***/


var shortestSubarray = module.exports = function(A, K) {
    var distancesToK = new Array(A.length);
    var minimumDist = -1;
    for (var i = 0; i < A.length; i++) {
        distancesToK[i] = shortestDistanceToK(A, K, i);
        if (distancesToK[i] > 0 && ((distancesToK[i] < minimumDist) || (minimumDist == -1))) {
            minimumDist = distancesToK[i];
        }
    }
    
    return minimumDist;
};
var shortestDistanceToK = function(A, K, start) {
    var minDist = -1;
    var currCounter = 0;
    
    for (var j = start; j < A.length; j++) {
        currCounter += A[j];
        if (currCounter >= K) {
            return (j - start + 1);
        }
        if (currCounter < 0 || minDist != -1) {
            return minDist;
        }
    }
    
    return minDist;
}