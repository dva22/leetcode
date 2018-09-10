// Source : https://leetcode.com/problems/rle-iterator/description/
// Author : Dubchak Valery

/***
Write an iterator that iterates through a run-length encoded sequence.

The iterator is initialized by RLEIterator(int[] A), where A is a run-length encoding of some sequence.  More specifically, for all even i, A[i] tells us the number of times that the non-negative integer value A[i+1] is repeated in the sequence.

The iterator supports one function: next(int n), which exhausts the next n elements (n >= 1) and returns the last element exhausted in this way.  If there is no element left to exhaust, next returns -1 instead.

For example, we start with A = [3,8,0,9,2,5], which is a run-length encoding of the sequence [8,8,8,5,5].  This is because the sequence can be read as "three eights, zero nines, two fives".

 

Example 1:

Input: ["RLEIterator","next","next","next","next"], [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
Output: [null,8,8,5,-1]

***/

var RLEIterator = function(A) {
    this.A = A;
    i = q = 0;
};

RLEIterator.prototype.next = function(n) {
    while (i < this.A.length) {
            if (q + n > this.A[i]) {
                n -= this.A[i] - q;
                q = 0;
                i += 2;
            } else {
                q += n;
                return this.A[i+1];
            }
        }

        return -1;
};