class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numMap = new Map();

        for(const n of nums) {
            if(numMap.has(n)) return true;
            else numMap.set(n, 1)
        }

        return false
    }
}
