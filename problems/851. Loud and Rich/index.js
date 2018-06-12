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

var loudAndRich = module.exports = function(richer, quiet) {
        let n = quiet.length;
        let ans = [];
        for(let i = 0; i < n; i++){
            ans[i] = i;
        }
        
        let inArr = Array(n).fill(0);
    
        for(let i=0; i < richer.length; i++){
            inArr[richer[i][1]]++;
        }
        
        let visited = Array(n).fill(false);
    
        while(true){
            let find = false;
            for(let i=0; i< n;i++){
                if(!visited[i] && inArr[i]==0){
                    for(let j=0;j<richer.length;j++){
                        if(richer[j][0] == i){
                            let next = richer[j][1];
                            inArr[next]--;
                            if(quiet[ans[next]] > quiet[ans[i]] ||
                               quiet[ans[next]] == quiet[ans[i]] &&
                               ans[next] > ans[i])
                                {
                                    ans[next] = ans[i];
                                }
                        }
                    }
                    visited[i] = true;
                    find = true;
                }
            }
            if(!find) break;
        }
    
        return ans;
};