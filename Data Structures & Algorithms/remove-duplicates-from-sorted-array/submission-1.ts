class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let l: number = 0,
            r: number = 0;
        const n: number = nums.length;

        while(r < n) {
            nums[l] = nums[r];

            while(r < n && nums[r] === nums[l]) {
                r++;
            }
            l++;
        }

        return l;
    }
}
