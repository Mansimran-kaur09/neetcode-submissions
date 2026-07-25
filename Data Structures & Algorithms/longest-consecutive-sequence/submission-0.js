class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let maxSeq = 0;

        numSet.forEach((num) => {
            if(!numSet.has(num-1)) {
                let currentSeq = 1;
                let currentNum = num;
                
                while(numSet.has(currentNum+1)) {
                    currentSeq++;
                    currentNum++;
                }

                maxSeq = Math.max(maxSeq, currentSeq)
            }
        })

        return maxSeq
    }
}
