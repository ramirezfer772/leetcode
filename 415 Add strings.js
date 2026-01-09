// 415 Add strings
// https://leetcode.com/problems/add-strings/description/

var addStrings = function (num1, num2) {
  const maxLength = Math.max(num1.length, num2.length);

  const num1Leading = num1.padStart(maxLength, 0);
  const num2Leading = num2.padStart(maxLength, 0);

  let carry = 0
  const result = []
  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = carry + +num1Leading[i] + +num2Leading[i]
    carry = Math.floor(sum / 10)
    result.unshift(sum % 10)
    console.log("carry", sum)
  }
  
  return result.join("")
};

addStrings("456", "77");

addStrings("11", "123");
