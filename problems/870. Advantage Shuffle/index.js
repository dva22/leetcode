// Source : https://leetcode.com/problems/advantage-shuffle/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
***/

var advantageCount = module.exports = function(A, B) {
    let m = B.map((x,i)=>[x,i]); 

    m.sort((a,b)=>a[0]-b[0]);
    A.sort((a,b)=>a-b);

    let j = 0;
    for(let i=0; i<m.length; i++){
    	while(j<A.length && A[j]<=m[i][0]) j++;
    	if(j===A.length) break;
    	[A[i],A[j]]=[A[j],A[i]];
    }

    let tmp = m.map((x,i)=>x.concat(A[i]));

    tmp.sort((a,b)=>a[1]-b[1]); 
    
    return tmp.map(x=>x[2]);
};