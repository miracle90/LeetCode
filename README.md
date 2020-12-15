# LeetCode

> LeetCode算法题日常训练

## 2. 三数之和 => 中等 😏😏

给你一个包含 n 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

### 示例：

```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

<details>
<summary>----------------- 解析 -----------------</summary>

### 我的作答

```js
// 时间复杂度是 O(n3)
var threeSum = function (nums) {
  let strArr = []
  let arr = []
  for (let i = 0; i < nums.length - 2; i++) {
    let valueI = nums[i]
    for (let j = i + 1; j < nums.length - 1; j++) {
      let valueJ = nums[j]
      for (let k = j + 1; k < nums.length; k++) {
        let valueK = nums[k]
        if (valueI + valueJ + valueK === 0) {
          let newArr = [valueI, valueJ, valueK]
          let newStr = newArr.sort((a, b) => a - b).join('')
          let a = strArr.filter(item => item === newStr)
          if (!a.length) {
            arr.push(newArr)
            strArr.push(newStr)
          }
        }
      }
    }
  }
  return arr
};
```

> 超出时间限制~~~

### 文字题解

#### 方法一：排序 + 双指针

#### 思路及算法

* 数组排序
* 去重
* 左右指针


```js
var threeSum = function (nums) {
  let res = []
  let length = nums.length;
  // 排序
  nums.sort((a, b) => a - b)
  // 最左值一定小于0，最右值一定大于0
  if (nums[0] <= 0 && nums[length - 1] >= 0) {
    for (let i = 0; i < length - 2; i++) {
      // 最左值为正数则一定无解
      if (nums[i] > 0) break;
      // 去掉重复情况
      if (i > 0 && nums[i] === nums[i - 1]) continue
      let center = i + 1
      let right = length - 1

      while (center < right) {
        if (nums[i] + nums[center] + nums[right] === 0) {
          res.push([nums[i], nums[center], nums[right]])
          // 现在要增加 center right，但是不能重复
          // 比如: [-2, -1, -1, -1, 3, 3, 3], i = 0, center = 1, right = 6, [-2, -1, 3] 的答案加入后，需要排除重复的 -1 和 3
          center++
          right--
          while (nums[center] === nums[center - 1]) center++;
          while (nums[right] === nums[right + 1]) right--;
        } else if (nums[i] + nums[center] + nums[right] < 0) {
          center++
        } else {
          right--
        }
      }
    }
  }
  return res
}
```

#### 复杂度分析

* 时间复杂度：O(n^2)，n 为数组长度
* 空间复杂度：O(1)
</details>


## 1. 两数之和 => 容易 😏

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

### 示例：

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

<details>
<summary>----------------- 解析 -----------------</summary>

### 我的作答

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

### 文字题解

#### 方法一：暴力枚举

#### 思路及算法

最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。

当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[0];
    }
}
```

#### 复杂度分析

* 时间复杂度：O(N^2)，其中 NN 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。
* 空间复杂度：O(1)。

#### 方法二：哈希表

#### 思路及算法

注意到方法一的时间复杂度较高的原因是寻找 target - x 的时间复杂度过高。因此，我们需要一种更优秀的方法，能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。

使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N)O(N) 降低到 O(1)O(1)。

这样我们创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。

```js
// 利用 Map 记录数组元素值和对应的下标
var twoSum = function(nums, target) {
  let len = nums.length
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
};
```

#### 复杂度分析

* 时间复杂度：O(N)，其中 NN 是数组中的元素数量。对于每一个元素 x，我们可以 O(1)O(1) 地寻找 target - x。
* 空间复杂度：O(N)，其中 N 是数组中的元素数量。主要为哈希表的开销。

</details>




# 以下为模板

## 1.  => 容易 😏



### 示例：

```

```

<details>
<summary>----------------- 解析 -----------------</summary>

### 我的作答

```js

```

### 文字题解

#### 方法一：

#### 思路及算法



```js

```

#### 复杂度分析

* 时间复杂度：
* 空间复杂度：

#### 方法二：

#### 思路及算法


```js

```

#### 复杂度分析

* 时间复杂度：
* 空间复杂度：

</details>
