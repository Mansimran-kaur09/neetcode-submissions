class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countObj = {};
        for(const num of nums) {
            countObj[num] = (countObj[num] || 0) + 1;
        }

        const arr = Object.entries(countObj).map(([key, freq]) => [freq, Number(key)]);
        arr.sort((a,b) => b[0] - a[0])

        return arr.slice(0, k).map(([freq, key]) => key)
    }
}
