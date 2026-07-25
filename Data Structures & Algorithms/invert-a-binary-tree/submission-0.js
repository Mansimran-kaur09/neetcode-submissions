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
     * @return {TreeNode}
     */
    invertTree(root) {
        const res = []
        function invert(node) {
            if(node === null) return;
            res.push(node);

            const temp = node.left;
            node.left = node.right;
            node.right = temp;

            if(node.left) invert(node.left);
            if(node.right) invert(node.right);
        }
        invert(root);
        return root;
    }
}
