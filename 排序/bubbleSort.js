/* 冒泡排序算法
今天搞个简单点的吧，看得我像睡觉啦~*（）*~
冒泡排序的思想比较简单，比较两个数，把两个数中大的那个放在后面，
在一个数组中，从第一个数开始，将它和其余数比较交换位置后，最大的那个回被放到最后面，此为第一伦循环，
而第二轮循环是将每个数都像第一个数一样做相同的操作，不过因为之前是排好顺序的，所以循环的次数会随之减少
 */

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
console.log(bubbleSort([2, 3, 3, 12, 32, 9,123]))
