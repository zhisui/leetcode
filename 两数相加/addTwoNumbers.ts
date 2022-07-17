/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */

/* 解题思路：数据是以链表的形式来存储的，相对与数组形式，链表在数组中间增删元素的时候不用移动
元素，只需要改变next的指向这道题其实就是一个遍历链表两个链表，然后求和，将求和的结果存储到一个
新的链表中，虽然是逆序存储的，但是和平常的加法运算原理是一样的，将相加得到结果的个位数添加到新链表，
将10位上的数算到后面的相加过程中
 */

/**
 * Definition for singly-linked list.
 */
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let p1 = l1 //链表1的指针
  let p2 = l2 //链表2的指针
  let l3 = new ListNode(0) //新建一个链表3用于存储相加的结果
  let p3  = l3 //链表3的指针
  let carry = 0 //相加的进位数，即10位上的数
  while(p2 || p1) { //遍历链表1和链表2，只要两个链表有一个不为空就继续
      const v1 = p1? p1.val: 0 //链表可能出现长度不一的情况如l1:[2,0],l2:[1,2,3,4],此时指针指向的值设为0
      const v2 = p2? p2.val: 0
      const val = v1 + v2 + carry //注意加上10位上的数，为进位数
      carry = Math.floor(val / 10) //取10位上的数
      p3.next = new ListNode(val % 10) //取个位上的数
      if (p1) p1= p1.next //相加完成指向下一个链表节点
      if (p2) p2= p2.next
      p3 = p3.next
  }
  // 遍历完成后看有没有进位，有进位要加到链表3中
  if (carry){
      p3.next = new ListNode(carry)
  }
  console.log(l3)
  //返回l3.next是因为刚开始定义的那个new ListNode(0)不算进去
  return l3.next
  };
