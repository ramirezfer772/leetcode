// 136. single number

// https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
  let result = 0;
  for (let n of nums) {
    result ^= n;
    console.log("Result:", n, result)
  }
  return result;
};

singleNumber([4, 1, 2, 1, 2]);

// singleNumber([2, 2, 1]);

// singleNumber([1]);
