var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: ["()"],
    output: 1
  },
  {
    input: ["(())"],
    output: 2
  },
  {
    input: ["()()"],
    output: 2
  },
  {
    input: ["(()(()))"],
    output: 6
  }
];