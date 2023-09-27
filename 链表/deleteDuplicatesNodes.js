// 删除的链表中的重复结点
const linkList = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 3,
                next: null,
            },
        },
    },
}

// 从指针 cur 指向链表的头节点，随后开始对链表进行遍历。如果当前 cur 与 cur.next 对应的元素相同，那么我们就将 cur.next 从链表中移除；否则说明链表中已经不存在其它与 cur 对应的元素相同的节点，因此可以将 cur 指向 cur.next。当遍历完整个链表之后，我们返回链表的头节点即可。
const deleteDuplicatesNodes = (head) => {
    if (!head.next || !head) return head
    let cur = head //对象的赋值是浅拷贝,所以改变cur里面属性的值，也会改变head对应属性的值这里把它当成一个指针
    while (cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}

console.log(deleteDuplicatesNodes(linkList))
