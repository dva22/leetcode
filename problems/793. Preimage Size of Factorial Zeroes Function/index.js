// Source : https://leetcode.com/problems/loud-and-rich/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.

For convenience, we'll call the person with label x, simply "person x".

We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  Note that richer may only be a subset of valid observations.

Also, we'll say quiet[x] = q if person x has quietness q.

Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]), among all people who definitely have equal to or more money than person x.

 

Example 1:

Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
Output: [5,5,2,5,4,5,6,7]
***/

var preimageSizeFZF = module.exports = function(K) {
        if (K < 5){
            return 5;
        }
        let d = 1;
        while (d * 5 + 1 <= K){
            d = d * 5 + 1;
        }
        if (K / d == 5){
            return 0;
        }
        return preimageSizeFZF(K % d);
}