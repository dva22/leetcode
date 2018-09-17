// Source : https://leetcode.com/problems/number-of-atoms/description/
// Author : Dubchak Valery

/***
Given a chemical formula (given as a string), return the count of each atom.

An atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

1 or more digits representing the count of that element may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

Example 1:
Input: 
formula = "H2O"
Output: "H2O"

***/

var countOfAtoms = module.exports = function(formula) {
    let [dic, coeff, stack, elem, cnt, j, res] = [{}, 1, [], "", 0, 0, ""];
    for (let i = formula.length - 1; i >= 0; i--) {
        if (!isNaN(formula[i] * 1)) {
            cnt += Number(formula[i]) * (10 ** j), j += 1;
        } 
        else if (formula[i] == ")") {
            stack.push(cnt), coeff *= cnt, j = cnt = 0;
        }
        else if (formula[i] == "(") {
            coeff = Math.floor(coeff / stack.pop()), j = cnt = 0;
        }
        else if (formula[i] == formula[i].toUpperCase()) {
            elem += formula[i];
            elem = elem.split("").reverse().join("");
            dic[elem] = dic[elem] || 0;
            dic[elem] += (cnt || 1) * coeff;
            elem = "", j = cnt = 0;
        }
        else {
            elem += formula[i];
        }
    }
    Object.keys(dic).sort().forEach(function(c) {res += dic[c] > 1 ? c + String(dic[c]): c;});
    return res;
};