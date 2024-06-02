/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     if (head == null ) {
//         return head;
//     }

//     head.next = removeElements(head.next,val);
//     return head.val === val ? head.next : head;
// };

var removeElements = function(head, val) {
    // 链表常用技巧，设置一个dummyHead
    const dummyHead = new ListNode(-1,head);
    let cur = dummyHead;
    while(cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next;
        }
    }
    return dummyHead.next;
}