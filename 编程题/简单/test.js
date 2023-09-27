// 函数柯里化

const add = (a, args) => {
    return function (args) {
        return a + args
    }
}
 console.log(add(2)(3))
