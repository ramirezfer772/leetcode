// 217 contains duplicate
// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
  let freqs = {};

  for (const num of nums) {
    freqs[num] = (freqs[num] ?? 0) + 1;
  }

  return !!Object.values(freqs).filter((freq) => freq > 1).length
};

containsDuplicate([1, 2, 3, 1]);

containsDuplicate([1, 2, 3, 4]);
