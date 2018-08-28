// Source : https://leetcode.com/problems/groups-of-special-equivalent-strings/description/

// Author : Dubchak Valery (dva@farma.amur.ru)

/***
You are given an array A of strings.

Two strings S and T are special-equivalent if after any number of moves, S == T.

A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

Now, a group of special-equivalent strings from A is a non-empty subset S of A such that any string not in S is not special-equivalent with any string in S.

Return the number of groups of special-equivalent strings from A.

 

Example 1:

Input: ["a","b","c","a","c","c"]
Output: 3
***/

var numSpecialEquivGroups = module.exports = function(A) {
    var cnt = 0;
    var seen = {};
    
    for(var s of A){
        var odd = {};
        var even = {};
        
        for(var c in s){
            if(c % 2 == 0){
                if(!even[s[c]]){
                    even[s[c]] = 1;
                }else{
                    even[s[c]]++;
                }
            }else{
                if(!odd[s[c]]){
                    odd[s[c]] = 1;
                }else{
                    odd[s[c]]++;
                } 
            }
        }
        
        var hash = hashcode(even) + '###' + hashcode(odd)
   
        if(!seen[hash]){
            seen[hash] = hash;
            cnt++;
        }
    }
    
    return cnt;
};

var hashcode = function(map){
    var hash = '';
    var keys = [];
    for(var k of Object.keys(map)){
        keys.push(k)
    }
    
    keys.sort();
    
    for(var k of keys){
        hash += (k + map[k]);
    }
    
    return hash;
}