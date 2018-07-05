var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [[[1, 0], [0, 3]], [0, 1]],
    output: true
  },
  {
    input: [[[1, 0]], [2, 0]],
    output: false
  },
  {
    input: [[[2, 0]], [1, 0]],
    output: false
  }
];