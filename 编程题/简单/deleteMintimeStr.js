/*
去除字符串中出现次数最少的字符，不改变的原字符的顺序
 */

function deleteMintimeStr(str) {
    if (!str) return
    const obj = {}
    const strArr = str.split('')
    strArr.forEach((element) => {
        if (!obj[element]) {
            obj[element] = 1
        } else {
            obj[element] += 1
        }
    })
    const target = Object.values(obj).sort()
    const min = target[0]
    console.log(min);
    for (const key in obj) {
        if (obj[key] <= min) {
            const reg = new RegExp(key, 'g')
            str = str.replace(reg, '')
        }
    }
    console.log(str,'str');
    return str
}

const str = 'aaabbbcceeff'
deleteMintimeStr(str)
