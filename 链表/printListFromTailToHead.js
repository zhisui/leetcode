// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
const linkList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null,
        },
    },
}

function printListFromTailToHead(head) {
    const newArr = []
    while (head) {
        if (head.val) {
            newArr.unshift(head.val)
            head = head.next
        }
    }
    return newArr
}

console.log(printListFromTailToHead(linkList))
