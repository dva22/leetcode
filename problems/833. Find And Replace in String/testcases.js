var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: ["abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]],
    output: "eeebffff"
  },
  {
    input: ["abcd", [0,2], ["ab","ec"], ["eee","ffff"]],
    output: "eeecd"
  }
];