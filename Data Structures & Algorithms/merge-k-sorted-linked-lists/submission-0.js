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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let nodes = [];
        let dummy = { val: 0, next: null };
        let combinedHead = dummy;

        lists.forEach((l) => {
            while (l) {
                nodes.push(l.val);
                l = l.next;
            }
        });

        nodes
            .sort((a, b) => a - b)
            .forEach((node) => {
                combinedHead.next = { val: node, next: null };
                combinedHead = combinedHead.next;
            });

        return dummy.next;
    }
}
