# LeetCode

LeetCode算法题日常训练

### 1. 两数之和（容易😏）

<i class="fa fa-weixin"></i>

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

### 示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

<details>
<summary>解析</summary>

### 作答

```js
var twoSum = function(nums, target) {
	for(let i = 0; i < nums.length; i++) {
		let valueI = nums[i]
		for(let j = i + 1; j < nums.length; j++) {
			let valueJ = nums[j]
			if (valueI + valueJ === target) return [i, j]
		}
	}
};
```

### 题解

```

```
</details>


<head> 
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"></script> 
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/v4-shims.js"></script> 
</head> 
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">




