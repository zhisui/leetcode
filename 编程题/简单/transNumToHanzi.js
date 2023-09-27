/*
编写一个函数将数字转换成汉语的输出，输入为不超过10000亿的数字
 */

function transNumToHanzi(num) {
    const arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    const arr2 = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千'] //可继续追加更高位转换值
    if (!num || isNaN(num)) {
        return '零'
    }
    const strArr = num.toString().split('')
    let result = ''
    for (let i = 0; i < strArr.length; i++) {
        const numKey = strArr.length - 1 - i;//倒序排列设值
        const numIndex = strArr[numKey]
         result = arr1[numIndex] + arr2[i] + result
    }
    result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
    // //合并中间多个零为一个零
    // result = result.replace(/零+/g, '零');
    // //将【零亿】换成【亿】【零万】换成【万】
    // result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
    // //将【亿万】换成【亿】
    // result = result.replace(/亿万/g, '亿');
    //移除末尾的零
    result = result.replace(/零+$/, '')
    // //将【一十】换成【十】
    // result = result.replace(/^一十/g, '十');
    // console.log(result,'result');
    console.log(result,'result');

    return result;
}

const num = 912672074080

transNumToHanzi(num)
