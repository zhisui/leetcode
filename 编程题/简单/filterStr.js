// 使用正则表达式实现一下需求，筛选出数组中只包含大小写的字符串，并将结果转换成大写

function filterStr(strArr) {
    return strArr.filter((item) => /^[a-zA-Z]+$/gi.test(item)).map((item) => item.toUpperCase())
}
const result = filterStr(['123', 'sjudehEydyegddjeu', 'dede', '78e3jdueh'])
console.log(result)

// 实现一个方法，从某个数值数组中，获取最小的正数（非0,非负数）的索引值
function getIndexOfMinValue(arr) {
    const result = arr.indexOf(Math.min(...arr))
    return result > 0 ? result : -1
}
const arr = [11, 32, 45, 3, 6, 3]
console.log(getIndexOfMinValue(arr))

// 编程实现温度装换，已知温度转换的关系式是：华式度 = 32 + 摄氏度x1.8，现在要求输入摄氏度，输出对应
// 华氏度，小数保留两位

function ssdToHsd(num) {
    if (typeof num !== 'number') {
        throw new Error('要求输入数值')
    } else {
        return (32 + num * 18).toFixed(2)
    }
}

console.log(ssdToHsd(27))

/**
 * @file objToArray
 *
 * 将对象按照要求转为数组
 * 注意console示例运行结果
 */
type Obj = Record<string, string>
interface FormatItem {
    key: string;
    op: string;
    value: string;
}

function objToArray(obj: Record<string, Obj>): FormatItem[] {
    const data = Object.entries(obj).map((item, key) => {
        const sendcondLayer = Object.entries(item[1])
        return {
            key: item[0],
            op: sendcondLayer[0][0],
            value: sendcondLayer[0][1],
        }
    })
    return data
}

console.log(
    objToArray({
        key1: {
            op1: 'value1',
        },
        key2: {
            op2: 'value2',
        },
    })
)
// result示例
// [
//     {key: 'key1', op: 'op1', value: 'value1'},
//     {key: 'key2', op: 'op2', value: 'value2'}
// ]

// 给某个资源的链接，请实心一个方法，获取改资源的后缀， 如html
function getSrcName(src) {
    return src.split('.').pop()
}
console.log(getSrcName('https://baidu.com.html'))
