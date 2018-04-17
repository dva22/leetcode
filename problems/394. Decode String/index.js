// Source : https://leetcode.com/problems/add-two-numbers/description/
// Author : Dubchak Valery

/***
Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

***/



var decodeString = module.exports = function(s) {

  var stack = [], num, last, str, times, tmp;
  
  for (var i = 0; i < s.length; ++i) {
    num = s[i].charCodeAt();
    last = stack[stack.length - 1];

    if (num >= 48 && num <= 57) {
      if (Number.isInteger(last)) {
        stack[stack.length - 1] = last * 10 + num - 48;
      } else {
        stack.push(num - 48);
      }
    } else if (91 === num) {
      num = s[i + 1].charCodeAt();
      if (num >= 48 && num <= 57) {
        stack.push(num - 48);
      } else {
        stack.push(s[i + 1]);
      }
      ++i;
    } else if (93 === num) {
      str = '';
      while (tmp = stack.pop()) {
        if (Number.isInteger(tmp)) {
          times = tmp;
          break;
        } else {
          str = tmp + str;
        }
      }
      stack.push('');
      for (var j = 0; j < times; ++j) {
        stack[stack.length - 1] += str;
      }
    } else {
      if ('string' === typeof last) {
        stack[stack.length - 1] = last + s[i];
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.join('');
};
