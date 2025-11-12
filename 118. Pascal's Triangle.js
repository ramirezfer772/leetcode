// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/description/

var generate = function (numRows) {
  const result = [[1], [1, 1]];

  for (let row = 2; row < numRows; row++) {
    const item = [1];
    for (let i = 1; i < row; i++) {
      item.push(result[row - 1][i - 1] + result[row - 1][i]);
    }
    item.push(1);
    result.push(item)
  }
  return result
};

generate(5);

// 1 -> 0,1
// 2 -> 1, 2
