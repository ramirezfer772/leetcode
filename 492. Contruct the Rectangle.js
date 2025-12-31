// 492. Contruct the Rectangle
// https://leetcode.com/problems/construct-the-rectangle/

var constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area));
  // console.log(w,  area / 4);

  while (area % w !== 0) {
    w--;
  }

  return [area / w, w];
};

// constructRectangle(37);
constructRectangle(16);
