// Source : https://leetcode.com/problems/k-th-symbol-in-grammar/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).

Examples:
Input: N = 1, K = 1
Output: 0
***/

var kthGrammar = module.exports = function(N, K) {
     if(N==1) return 0;
        if(N==2) return K==1?0:1;
        let index=1;
        while(N>2){
            let temp= Math.pow(2,(N-2));
            if(K>temp) {
                K=K-temp;
                N=N-1;
                index*=-1;
            } else N=N-1;
        }
        if(K==1) return index==-1?1:0;
        else return index==-1?0:1;
};