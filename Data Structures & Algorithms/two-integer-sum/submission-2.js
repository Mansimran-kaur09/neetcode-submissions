class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map()
        for(let i=0; i<nums.length; i++) {
            const requiredNum = target - nums[i];
            
            if(numMap.has(requiredNum)) {
                const index = numMap.get(requiredNum);
                return [i, index]
            }
            numMap.set(nums[i], i)
        }

        return -1
    }
}
