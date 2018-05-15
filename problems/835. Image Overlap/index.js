// Source : https://leetcode.com/problems/image-overlap/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:

Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
***/

var largestOverlap = module.exports = function(A, B) {
        let N = A.length;
        let map = new Map();
        let ans = 0;
       
        for (let i = 0; i < N; i++){
            for (let j = 0; j < N; j++){
                if (A[i][j] == 1){
                    for (let i2 = 0; i2 < N; i2++){
                        for (let j2 = 0; j2 < N; j2++){
                            if (B[i2][j2] == 1){
                               delta = (i - i2) + " " + (j - j2);   
                               if (!map.has(delta)) {
                                map.set(delta, 0);
                                }
                               map.set(delta, map.get(delta) + 1);
                               ans = Math.max(ans, map.get(delta));
                            }
                        }
                    }
                }
            }
        }    
   
        return ans;
}; 
 