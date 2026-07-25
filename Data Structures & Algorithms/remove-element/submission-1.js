class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length;
        let count = 0;
        let index = 0;
        
        while(index < n) {
            if(nums[index] !== val) {
                count++;
                index++;
            }
            else nums[index] = nums[--n]
        }
        return count;
    }
}
