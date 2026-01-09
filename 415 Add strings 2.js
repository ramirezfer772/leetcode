// 415 Add strings
// https://leetcode.com/problems/add-strings/description/

var addStrings = function (num1, num2) {
  let first = num1.length - 1;
  let second = num2.length - 1;
  let carry = 0;
  let res = "";

  while (first >= 0 || second >= 0) {
    const i = num1[first] ?? "0";
    const j = num2[second] ?? "0";
    const sum = Number(i) + Number(j) + carry
    carry = Math.floor(sum / 10)
    res =  String(sum % 10) + res

    console.log("sum:", i, j, carry, res);

    first--;
    second--;
  }

  return res;
};

// addStrings("456", "77");

addStrings("11", "123");
