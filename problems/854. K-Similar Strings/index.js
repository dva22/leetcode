// Source : https://leetcode.com/problems/k-similar-strings/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.

Given two anagrams A and B, return the smallest K for which A and B are K-similar.

Example 1:

Input: A = "ab", B = "ba"
Output: 1
***/

var kSimilarity  = module.exports = function(A, B) {
    var a = Array.from(A);
    var b = Array.from(B);
    const N = Infinity;
    
    return dfs(0, a, b);
    
    function dfs(p, a, b)
    {      
        if(p == a.length) return 0;
        
        if(a[p] == b[p]) return dfs(p+1, a, b);
        
        let ans=N;
              
        for(let i=p+1;i<a.length;i++)
            if(a[i]==b[p]) {
                [a[i],a[p]] = [a[p],a[i]]            
                ans=Math.min(ans,dfs(p+1,a,b)+1);            
                [a[i],a[p]] = [a[p],a[i]]            
                if(b[i] == a[p]) break;
            }
        return ans;
    }
};
 