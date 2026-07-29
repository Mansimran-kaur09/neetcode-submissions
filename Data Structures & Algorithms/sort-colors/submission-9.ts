class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let zero: number = 0,
            one: number = 0;

        for(let two = 0; two< nums.length; two++) {
            let tmp = nums[two];

            nums[two] = 2;
            if(tmp < 2) nums[one++] = 1
            if(tmp < 1) nums[zero++] = 0
        }
    }
}
