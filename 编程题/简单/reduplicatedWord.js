/*
叠词的数量
Input: 'abcdaaabbccccdddefgaaa'
Output: 4

1. 输出叠词的数量
2. 输出去重叠词的数量
3. 用正则实现
 */

function reduplicatedWord(str) {
    const obj = {}
    const reg = /(.)\1{1,}/g
    const target = str.match(reg)
    const res1 = new Set(target.map((item) => item[0])).size

    const res2 = str.replace(reg, '$1') //$1获取第一个组匹配到的内容,实现字符串去重

    console.log(res1, '叠词的数量')
    console.log(res2, '将叠词去重后的结果')
}

const str = 'abcdaaabbccccdddefgaaa'
reduplicatedWord(str)
