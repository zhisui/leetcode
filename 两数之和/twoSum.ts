/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
方法1：时间复杂度：O(n^2)，空间复杂度为O(1) 执行用时：92 ms
解题思路：暴力破解，利用双重循环，找到两个值相加为目标值的即将下标返回
*/

 const twoSum1 = function(nums:number[], target:number) {
  for(let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length - 1; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

/*
方法2：时间复杂度O(n),空间复杂度O(1) 执行用时：44ms
解题思路：便利数组，获取其对应的另一个加数，看map对象里面没有，则将其在数组中对应的值作为key,下标作为value，以键值对的形式存储在map里面，如果map有的话就将其直接返回。其实就是将map作为一个对应表去查找，这样可以保证只需要循环一次。
*/

const twoSum2 = (nums: number[], target: number) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      let a = nums[i]
      let b = target-a
      if (map.has(b)) {
          return [i,map.get(b)]
      } else {
          map.set(a, i)
      }
  }
  }
