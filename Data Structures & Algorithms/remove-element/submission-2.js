class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length;
        let index = 0;
        
        while(index < n) {
            if(nums[index] !== val) {
                index++;
            }
            else nums[index] = nums[--n]
        }
        return n;
    }
}
