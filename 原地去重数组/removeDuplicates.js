// 不新建新的数组，只通过操作原数组实现数组去重
function removeDuplicates(arr) {
    const action = (arr) => {
        let slow = 0
        for (let fast = 1; fast < arr.length; fast++) {
            if (arr[slow] !== arr[fast]) {
                slow++
                arr[slow] = arr[fast]
            }
        }
        return slow + 1
    }

    const length = action(arr)
    const result = arr.slice(0, length)
    return result
}

const arr = [1, 2, 3, 3, 3, 4, 4, 2]
const result = removeDuplicates(arr)
console.log(result, 'arr')
