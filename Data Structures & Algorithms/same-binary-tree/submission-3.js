/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const q1 = new Queue()
        const q2 = new Queue();
        q1.push(p);
        q2.push(q);

        while (q1.size() > 0 && q2.size() > 0) {
            for (let i = q1.size(); i > 0; i--) {
                let nodeP = q1.pop();
                let nodeQ = q2.pop();

                if(nodeP === null && nodeQ === null) continue;
                if(!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
                    return false;
                }
                q1.push(nodeP.left);
                q2.push(nodeQ.left);
                q1.push(nodeP.right);
                q2.push(nodeQ.right);
            }
        }
        return true;
    }
}
