// Source : https://leetcode.com/problems/nth-magical-number/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
A positive integer is magical if it is divisible by either A or B.

Return the N-th magical number.  Since the answer may be very large, return it modulo 10^9 + 7.

 

Example 1:

Input: N = 1, A = 2, B = 3
Output: 2
***/

var nthMagicalNumber = module.exports = function(N, A, B) {
    gcd = (x, y) => {
        if (x == 0) return y;
        return gcd(y % x, x);
    }

    const MOD = 1000000007;
    const L = A / gcd(A, B) * B;

    let lo = 0;
    let hi = 1e15;
    while (lo < hi) {
        let mi = lo + Math.trunc((hi - lo) / 2);
        if (Math.trunc(mi/A) + Math.trunc(mi/B) - Math.trunc(mi/L) < N)
            lo = mi + 1;
        else
            hi = mi;
    }

    return lo % MOD;
};