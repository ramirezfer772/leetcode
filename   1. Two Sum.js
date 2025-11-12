//  1. Two Sum
// https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      return [numMap.get(nums[i]), i];
    } else {
      numMap.set(target - nums[i], i);
    }
  }

  return -1;
};

twoSum([3, 2, 4], 6);
