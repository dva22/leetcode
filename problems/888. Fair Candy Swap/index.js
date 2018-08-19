// Source : https://leetcode.com/problems/fair-candy-swap/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

 

Example 1:

Input: A = [1,1], B = [2,2]
Output: [1,2]
***/
        
var fairCandySwap = module.exports= function(A, B) {
    let sumA = 0;
    let sumB = 0;
    for (i of A) 
        sumA += i;
    for (j of B) 
        sumB += j;
    
    
    for (i of A) {
        for (j of B){
            if ((sumA + j - i) === (sumB + i -j))  
                return [i,j]
        }
    }    
    
};