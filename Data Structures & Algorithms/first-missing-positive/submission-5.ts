class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        const len: number = nums.length;
        let i: number = 0;

        while (i < len) {
            if (nums[i] <= 0) {
                i++;
                continue;
            }

            let index: number = nums[i] - 1;
            if (nums[i] !== nums[index]) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
            } else {
                i++;
            }
        }

        for (let i = 0; i < len; i++) {
            if (nums[i] != i + 1) return i + 1;
        }

        return len + 1;
    }
}
