// Source : https://leetcode.com/problems/reorganize-string/description/
// Author : Dubchak Valery

/***
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"

***/

var reorganizeString = module.exports = function(S) {

    var dict = {};

    for (var i = 0; i <= S.length-1; i++) {
        if (!dict.hasOwnProperty(S.charAt(i))){
            dict[S.charAt(i)] = 0;
        }
        dict[S.charAt(i)]++;
    }


    var queue = [];
    for (var key in dict) {
        queue.push([key, dict[key]]);
    }

    sortQueue(queue);
    var result = "";

    while (queue.length > 0) {
        var first = queue.shift();

        if (result == "" || result.charAt(result.length - 1) != first[0]) {
            result = result + first[0];
            first[1]--;
            if(first[1] > 0)
            queue.push(first);
        }
        else {
            second = queue.shift();
            if (second == undefined)
                return "";
            result = result + second[0];
            second[1]--;
            if(second[1] > 0)
            queue.push(second);
            queue.push(first);
        }
        sortQueue(queue);
    }
    return result;
}

function sortQueue(ary) {

    ary.sort(function (a, b) {
        return b[1] - a[1];
    });

}