class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let res: number = 0,
            currSum: number = 0;

        const prefixSum: Map<number, number> = new Map();
        prefixSum.set(0, 1);

        for(const num of nums) {
            currSum += num;

            let diff = currSum - k;
            res += prefixSum.get(diff) || 0;

            prefixSum.set(currSum, (prefixSum.get(currSum) || 0) + 1)
        }

        return res;
    }
}
