class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const result: number[] = [];
        const map: Map<number, number> = new Map();
        const maxCount: number = Math.floor(nums.length / 3);

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [key, value] of map.entries()) {
            if(value > maxCount) result.push(key);
        }

        return result;
    }
}
