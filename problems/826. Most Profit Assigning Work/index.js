// Source : https://leetcode.com/problems/most-profit-assigning-work/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We have jobs: difficulty[i] is the difficulty of the ith job, and profit[i] is the profit of the ith job. 

Now we have some workers. worker[i] is the ability of the ith worker, which means that this worker can only complete a job with difficulty at most worker[i]. 

Every worker can be assigned at most one job, but one job can be completed multiple times.

For example, if 3 people attempt the same job that pays $1, then the total profit will be $3.  If a worker cannot complete any job, his profit is $0.

What is the most profit we can make?

Example 1:

Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100 
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get profit of [20,20,30,30] seperately.
***/

var maxProfitAssignment = module.exports = function(difficulty, profit, worker) {
        map = new Map();
        maxD = 0;
        for(let i = 0;i<difficulty.length;i++){
            if(!map.has(difficulty[i])) map.set(difficulty[i],profit[i]);   
            else map.set(difficulty[i],Math.max(map.get(difficulty[i]),profit[i])); 
            maxD = Math.max(maxD,difficulty[i]);     
        }    
    
        p = [0];
        p.length=maxD + 1;
        
        for(let i=1;i<p.length;++i){
            p[i] = Math.max(p[i-1], map.has(i) ? map.get(i) : 0);  // max profit for difficulty in [1,maxD]
        }
        
        maxP = 0;
        for(let i=0;i<worker.length;i++){
            maxP+= worker[i] > maxD? p[maxD] : p[worker[i]];
        }
        return maxP;
};