// 342. Power of Four
// https://leetcode.com/problems/power-of-four/


//  power -> by = X 
// log -> logb(X) = y
var isPowerOfFour = function(n) {
  return (Math.log(n) / Math.log(4)) % 1 === 0
};


isPowerOfFour(1)