var ListNode = require('../../structures/ListNode');

module.exports = [
  {
    input: ["3[a]2[bc]"],
    output: "aaabcbc"// ListNode.generateList(807),
  },
  {
    input: ["3[a2[c]]"],
    output: "accaccacc",
  },
  {
    input: ["2[abc]3[cd]ef"],
    output: "abcabccdcdcdef",
  }
];