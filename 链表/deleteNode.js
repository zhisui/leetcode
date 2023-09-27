// 刪除链表中结点

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

/**
@param head 链表
@param value 删除的链表的值
 */

function deleteNode(head, value) {
    // 只有一个结点和没有结点的情况下直接返回
    if(!head || !head.next) {
        return head
    } else {
        let pre = head;
        let curr = head.next;
        while(curr) {
            if(curr.val === value){
                pre.next = curr.next;
                curr = null
                break
            } else {
                prev = cur
                curr = curr.next
            }
        }
    }
    return head;
}

console.log(deleteNode(linkList, 2))
