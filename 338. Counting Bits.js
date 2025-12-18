// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/description/

var countBits = function (n) {
  let dp = new Array(n + 1).fill(0);
  let sub = 1;

  for (var i = 1; i <= n; i++) {
    // 2, 4, 8, 16
    if (sub * 2 === i) {
      sub = i;
    }
    dp[i] = dp[i - sub] + 1;
    console.log(i, sub, dp);
  }

  return dp;
};

countBits(7);

