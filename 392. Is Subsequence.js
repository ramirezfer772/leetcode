// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/

var isSubsequence = function (s, t) {
  let left = 0;
  let right = 0;

  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) {
      left++;
      right++;
    } else {
      right++;
    }
  }
  
  return left >= s.length 
};

isSubsequence("abc", "ahbgdc");
// isSubsequence("axc", "ahbgdc");

