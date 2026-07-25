class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        const sorted = [...new Set(nums.sort((a, b) => a - b))];
        let maxCount = 1;
        let count = 1;

        let index = 0;
        while (index < sorted.length - 1) {
            if (sorted[index] + 1 === sorted[index + 1]) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 1;
            }
            index++;
        }
        return Math.max(maxCount, count);
    }
}
