var ListNode = require('../../structures/ListNode');

module.exports = [
 {
    input: [["amazon","apple","facebook","google","leetcode"],  ["e","o"]],
    output: ["facebook","google","leetcode"]
  },
  {
    input: [["amazon","apple","facebook","google","leetcode"], ["l","e"]],
    output: ["apple","google","leetcode"]
  },
  {
    input: [["amazon","apple","facebook","google","leetcode"],  ["e","oo"]],
    output: ["facebook","google"]
  },
  {
    input: [["amazon","apple","facebook","google","leetcode"], ["ec","oc","ceo"]],
    output: ["facebook","leetcode"]
  }
];