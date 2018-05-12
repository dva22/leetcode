// Source : https://leetcode.com/problems/bus-routes/description/
// Author : Dubchak Valery (dva@farma.amur.ru)

/***
We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.

We start at bus stop S (initially not on a bus), and we want to go to bus stop T. Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

Example:
Input: 
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
***/
var numBusesToDestination = module.exports = function(routes, S, T) {
     if(S == T) return 0;
        let stepBus = new Map();
        for(let i = 0;i < routes.length;i++){
            for(let step of routes[i]){
                if(stepBus.has(step)){
                    stepBus.get(step).add(i);
                }
                else{
                    let temp = new Set();
                    temp.add(i);
                    stepBus.set(step, temp);
                }
            }
        }
        let visit = [];
        let pass = new Set();
        let step = [];
        step.push(S);
        pass.add(S);
        let res = 1;
        while(!(step.length==0)){
            let temp = [];
            for(let st of step){
                for(let bus of stepBus.get(st)){
                    if(!visit[bus]){
                        for(let num of routes[bus]){
                            if(!pass.has(num)){
                                if(num == T)return res;
                                else{
                                    pass.add(num);
                                    temp.push(num);
                                }
                            }
                        }
                        visit[bus] = true;
                    }
                }
            }
            res++;
            step = temp;
        }
        return -1;
    };
 