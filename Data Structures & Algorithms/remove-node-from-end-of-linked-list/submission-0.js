/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummyHead = { next: head };

        let slow = dummyHead;
        let fast = dummyHead;

        for (let i = 1; i <= n; i++) {
            fast = fast.next;
        }

        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return dummyHead.next;
    }
}
