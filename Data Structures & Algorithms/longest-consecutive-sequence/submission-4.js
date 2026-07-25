class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxCount = 0;

        for(const num of numSet) {
            let curr = num, count = 0;
            while(numSet.has(curr)) {
                curr++;
                count++
            }
            maxCount = Math.max(maxCount, count)
        }
        return maxCount
    }
}
