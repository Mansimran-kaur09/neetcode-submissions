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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) return true;
        let validity = true;

        function isValid(node, min, max) {
            if (!node || !validity) return;

            if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
                validity = false;
                return;
            }

            isValid(node.left, min, node.val);
            isValid(node.right, node.val, max);
        }

        isValid(root, null, null);
        return validity;
    }
}
