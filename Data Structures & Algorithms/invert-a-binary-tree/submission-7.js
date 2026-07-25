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
        if(!root) return null;
        const q = new Queue();
        q.push(root);

        while(q.size() > 0) {
            for(let i=0; i<q.size(); i++) {
                const node = q.pop();

                const temp = node.left;
                node.left = node.right;
                node.right = temp;

                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
        }
        return root;
    }
}
