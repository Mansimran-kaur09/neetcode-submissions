class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i=0; i<nums.length; i++) {
            const num = nums[i]
            const required = target - num;

            if(map.has(required)) {
                const index = map.get(required);
                return [i, index]
            } else map.set(num, i)
        }
        return -1;
    }
}
