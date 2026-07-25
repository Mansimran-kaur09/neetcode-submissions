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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while(current) {
            let temp = current.next;

            current.next = prev; // tail next is null;

            prev = current; // move by one
            current = temp; // move by one
        }
        return prev;
    }
}
