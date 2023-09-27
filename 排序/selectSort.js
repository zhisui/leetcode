// 选择排序
function selectSort(arr) {
  for (j = 0; j < arr.length - 1; j++) {
    let minIndex = j
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }
    ;[arr[j], arr[minIndex]] = [arr[minIndex], arr[j]]
  }
  return arr
}

const arr = [2, 4, 157, 2, 12, 5]
console.log(selectSort(arr))
