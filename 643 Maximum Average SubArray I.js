// 643 Maximum Average SubArray I
// https://leetcode.com/problems/maximum-average-subarray-i/description/

// note:
/*
The sliding window approach is an algorithmic technique that efficiently processes contiguous subsets (windows) of data, like arrays or strings, by moving a virtual window across them, updating results incrementally instead of recomputing from scratch, optimizing solutions for problems like finding max sums or longest substrings with unique characters from O(n²) to O(n). 
*/
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    // console.log(maxSum, nums[i], i, i - k, nums[i - k]);
    sum += nums[i] - nums[i - k];
    console.log(sum);
    maxSum = Math.max(maxSum, sum);
  }
  
  return maxSum / k

};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
