class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len = nums.length;
        let ans = Array.from({length: 2 * len})

        for(let i=0; i<len; i++) {
            ans[i] = nums[i];
            ans[i+len] = nums[i];
        }
        return ans;
    }
}
