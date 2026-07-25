class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i=0; i<nums.length; i++) {
            const requiredNum = target - nums[i];
            let j = 0;

            while(i !== j && j < nums.length) {
                if(requiredNum === nums[j]) return [i, j]
                else j++
            }
        }

        return -1
    }
}
