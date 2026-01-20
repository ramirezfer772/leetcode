// 507 Perfect Number
// https://leetcode.com/problems/perfect-number/description/

var checkPerfectNumber = function (num) {
  // const divisors = [];
  let sum = 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // divisors.push(i);
      console.log(i)
      sum += i;
    }
  }

  return sum === num;
};

// checkPerfectNumber(28);
checkPerfectNumber(7);
