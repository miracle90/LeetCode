/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let prev = cost[0], cur = cost[1], i = 1
  while (++i < cost.length) {
    let temp = cost[i] + Math.min(prev, cur)
    prev = cur
    cur = temp
    console.log(prev, cur, temp)
  }
  return Math.min(prev, cur)
};

// var cost = [10, 100, 20]
// var cost = [10, 15, 20]
var cost = [0,0,1,2,1,3,1]
// var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]


console.log(minCostClimbingStairs(cost))