// 409 Longest palindrome
// https://leetcode.com/problems/longest-palindrome/

var longestPalindrome = function (s) {
  let freqs = {};
  for (let i = 0; i < s.length; i++) {
    freqs[s[i]] ? (freqs[s[i]] = freqs[s[i]] + 1) : (freqs[s[i]] = 1);
  }

  let result = 0;
  for (const count of Object.values(freqs)) {
    result += count % 2 === 0 ? count : 0;
  }
  
  return result >= s.length ? result : result + 1
};

longestPalindrome("abccccdd");

longestPalindrome("Hola")

longestPalindrome("a")
