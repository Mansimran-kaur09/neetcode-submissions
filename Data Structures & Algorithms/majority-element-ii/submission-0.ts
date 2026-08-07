class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        let result: Set<number> = new Set();
        let map: Map<number, number> = new Map();
        const maxCount: number = Math.floor(nums.length/3)

        for(const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
            if(map.get(num) > maxCount) result.add(num)
        }

        return [...result];
    }
}
