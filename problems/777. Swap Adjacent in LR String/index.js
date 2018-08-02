// Source : https://leetcode.com/problems/swap-adjacent-in-lr-string/description/
// Author : Dubchak Valery

/***
In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other.

Example:

Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
Output: True

***/

var canTransform = module.exports = function(start, end) {
     let r = 0, l = 0;
     for (let i = 0; i< start.length; i++){
            if (start.charAt(i) == 'R') r++;
            if (end.charAt(i) == 'L') l++;
            if (start.charAt(i) == 'L') l--;
            if (end.charAt(i) == 'R') r--;

            if ((l<0 || r != 0) && (l != 0 || r<0)) return false;
     }
        
        if (l == 0 && r == 0) return true;
        return false;
};