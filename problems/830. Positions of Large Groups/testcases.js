var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: ["abbxxxxzzy"],
    output: [[3, 6]]
  },
  {
    input: ["abc"],
    output: []
  },
  {
    input: ["abcdddeeeeaabbbcd"],
    output: [[3, 5], [6, 9], [12, 14]]
  },
  {
    input: ["aaa"],
    output: [[0, 2]]
  }
];