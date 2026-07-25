class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsCount = new Map();

        for(const num of nums) {
            numsCount.set(num, (numsCount.get(num) || 0) + 1)
        }

        const bucket = [];
        for(const [key, frequency] of numsCount) {
            bucket[frequency] = (bucket[frequency] || new Set()).add(key)
        }

        const result = []
        for(let i=bucket.length-1; i>=0; i--) {
            if(bucket[i]) {
                result.push(...bucket[i])
            }
            if(result.length === k) break;
        }

        return result;
    }
}
