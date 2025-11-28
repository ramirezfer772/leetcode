// 367 Valid perfect square
// https://leetcode.com/problems/valid-perfect-square/description/

var isPerfectSquare = function (num) {
  let left = 2;
  let right = Math.floor(num / 2);
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const sqr = middle * middle;
    if (sqr === num) {
      return true
    } else if (sqr < num) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false
};

// isPerfectSquare(16);
// isPerfectSquare(25);
// isPerfectSquare(9);
isPerfectSquare(26);

// 2 3 4 5 6 7 8 9
// 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
