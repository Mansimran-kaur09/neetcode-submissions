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
        if(lists.length === 0) return null;

        const dummy = { val: 0, next: null };
        let curr = dummy;

        let minHeap = new MinPriorityQueue(x => x.val);

        for(let i=0; i<lists.length; i++) {
            if(lists[i] !== null) minHeap.enqueue(lists[i]);
        }

        while(minHeap.size() > 0) {
            let node = minHeap.dequeue();

            curr.next = node;
            curr = curr.next;

            node = node.next;
            if(node !== null) minHeap.enqueue(node)
        }

        return dummy.next
    }
}
