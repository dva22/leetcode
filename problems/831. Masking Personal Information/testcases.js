var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: ["LeetCode@LeetCode.com"],
    output: "l*****e@leetcode.com"
  },
  {
    input: ["AB@qq.com"],
    output: "a*****b@qq.com"
  },
  {
    input: ["1(234)567-890"],
    output: "***-***-7890"
  },
  {
    input: ["86-(10)12345678"],
    output: "+**-***-***-5678"
  }
];