// Source : https://leetcode.com/problems/numbers-at-most-n-given-digit-set/description/
// Author : Dubchak Valery

/***
We have a sorted set of digits D, a non-empty subset of {'1','2','3','4','5','6','7','8','9'}.  (Note that '0' is not included.)

Now, we write numbers using these digits, using each digit as many times as we want.  For example, if D = {'1','3','5'}, we may write numbers such as '13', '551', '1351315'.

Return the number of positive integers that can be written (using the digits of D) that are less than or equal to N.

 

Example 1:

Input: D = ["1","3","5","7"], N = 100
Output: 20

***/

var atMostNGivenDigitSet = module.exports = function(D, N) {
    var S = N.toString();    
    var r = 0;
    var leadingZero = 0;
    var biggest = true;
    for (var s of S){
        r = (r + leadingZero) * D.length;
        if (biggest){
            var c = 0;
            biggest = false;
            for (var d of D){
                if (d < s) {
                    c++;
                    continue;
                }else if (d == s){
                    biggest = true;
                }
                break;
            }            
            r = r + c;
        }
        leadingZero = 1;
    }
    if (biggest) r++;
    return r;
};