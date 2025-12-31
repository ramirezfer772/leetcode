// 169 Majority element

// https://leetcode.com/problems/majority-element/description/

var majorityElement = function (nums) {
  let n = nums.length;
  console.log("n", n, n / 2);

  let freqs = {};

  for (const num of nums) {
    console.log(num);
    freqs[num] = (freqs[num] ?? 0) + 1;
  }

  n = Math.floor(n / 2);

  console.log(n, freqs, Object.entries(freqs));
  for (const item of Object.entries(freqs)) {
    console.log(item)
    if (item[1] > n) {
      return item[0]
    }
  }

  return 0;
};

// majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([3,2,3])
