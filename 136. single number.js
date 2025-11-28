// 136. single number

// https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
  const freqs = {};

  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    freqs[nums[i]] = (freqs[nums[i]] ?? 0 ) + 1
  }
  
  for (const freq in freqs) {
    // console.log(freq, freqs[freq]);
    if (freqs[freq] === 1) {
      return +freq;
    }
  }

  // console.log(freqs);
};

singleNumber([4, 1, 2, 1, 2]);

singleNumber([2, 2, 1]);

singleNumber([1]);
