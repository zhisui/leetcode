/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 这种方法的时间复杂度：O(n^2)，空间复杂度为O(1) 执行用时：92 ms
 const twoSum = function(nums:number[], target:number) {
  for(let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length - 1; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};
