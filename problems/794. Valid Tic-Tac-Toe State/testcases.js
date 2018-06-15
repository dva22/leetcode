var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [["O  ", "   ", "   "]],
    output: false
  },
  {
    input: [["XOX", " X ", "   "]],
    output: false
  },
  {
    input: [["XXX", "   ", "OOO"]],
    output: false
  },
  {
    input: [["XOX", "O O", "XOX"]],
    output: true
  },
];