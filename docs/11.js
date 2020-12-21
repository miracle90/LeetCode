// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度。

var rotate = function(matrix) {
  const LENGTH = matrix.length
  const newMatrix = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < LENGTH; i++) {
    for (let j = 0; j < LENGTH; j++) {
      matrix[j][LENGTH - i - 1] = newMatrix[i][j]
    }
  }
  // console.log(matrix)
  return matrix
};

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]


// var arr = [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]

// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
console.log(rotate(arr))
