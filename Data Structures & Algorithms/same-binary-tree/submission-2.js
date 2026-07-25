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
        let stack = [[p, q]]

        while(stack.length > 0) {
            const current = stack.pop();
            let first = current[0];
            let second = current[1];

            if(!first && !second) continue;
            if(!first || !second || first.val !== second.val) return false;
            stack.push([first.left, second.left]);
            stack.push([first.right, second.right]) 
        }
        return true
    }
}
