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
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (!root) return res;

        const q = new Queue();
        q.push(root);

        while (q.size() > 0) {
            const arr = [];
            for (let i = q.size(); i > 0; i--) {
                const curr = q.pop();

                console.log(curr.val, "curr");
                if (curr !== null) {
                    arr.push(curr.val);
                    if (curr.left) q.push(curr.left);
                    if (curr.right) q.push(curr.right);
                }
            }
            if(arr.length > 0) res.push(arr);
            
        }
        return res;
    }
}
