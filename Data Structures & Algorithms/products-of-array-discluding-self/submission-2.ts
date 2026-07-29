class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = new Array(nums.length).fill(1);
        const n = nums.length;

        let product = 1;
        for (let i = 0; i < n; i++) {
            result[i] = product * result[i];
            product = product * nums[i];
        }

        product = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] = product * result[i];
            product = product * nums[i];
        }

        return result;
    }
}
