// 459. Repeated Substring Pattern
// https://leetcode.com/problems/repeated-substring-pattern/description/

var repeatedSubstringPattern = function (s) {
  const ss = (s + s).slice(1, s.length * 2 - 1);


  for (let i = 0; i < ss.length; i++) {
    let newss = ss.slice(i, s.length).concat(ss.slice(s.length)).slice(0, s.length)
    if (newss === s) {
      return true
    }
  }

  return false;

};


// repeatedSubstringPattern("baba");
// repeatedSubstringPattern("abab");
repeatedSubstringPattern("aba");
