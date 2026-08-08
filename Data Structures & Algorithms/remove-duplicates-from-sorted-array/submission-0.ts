class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let l: number = 1;
        const n: number = nums.length;

        for (let r = 1; r < n; r++) {
            if (nums[r] !== nums[r - 1]) {
                nums[l] = nums[r];
                l++;
            }
        }

        return l;
    }
}
