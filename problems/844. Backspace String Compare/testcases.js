var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: ["ab#c","ad#c"],
    output: true
  },
  {
    input: ["ab##",  "c#d#"],
    output: true
  },
  {
    input: ["a##c", "#a#c"],
    output: true
  },
  {
    input: ["a#c",  "b"],
    output: false
  }
];