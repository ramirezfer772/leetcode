// 278 first bad version
// https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
  return function (n) {
    let left = 0;
    let right = n;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (middle === isBadVersion) {
        return isBadVersion;
      } else if (middle < isBadVersion) {
        left = middle + 1;
      } else if (middle > isBadVersion) {
        right = middle - 1;
      }
      console.log(left, right);
    }
  };
};

console.log("result:", solution(4)(5));

// isBadVersion -> 4
// 1,2,3,4,5
