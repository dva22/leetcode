var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [["9001 discuss.leetcode.com"]],
    output: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
  },
  {
    input: [["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]],
    output: ["900 google.mail.com", "901 mail.com", "951 com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org","5 org"]
  }
];