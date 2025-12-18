// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/description/

var nextGreaterElement = function (nums1, nums2) {
  const stack = [];// If present in the stack means: "It has not next great number"
  const map = {}; // if present in map means: "there is next great and is save it as a key value"

  for (let n of nums2) {
    while (stack.length && n > stack[stack.length - 1]) {
      map[stack.pop()] = n;
    }
    stack.push(n);
    console.log(stack, map);
  }

  console.log(stack, map);

  for (let n of stack) {
    map[n] = -1;
  }

  console.log("map:", map);

  return nums1.map((n) => map[n]);
};

// nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
nextGreaterElement([4, 1, 2], [2, 1, 4]);

// [-1, 3, -1]
