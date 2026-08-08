class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        const set: Set<number> = new Set(nums);
        let present: number = 1;

        for (const num of nums) {
            if (num < 0) continue;

            if(num === 0 && !set.has(present)) return present

            if (num > 0 && set.has(present)) {
                present++;
            };
        }

        return present;
    }
}
