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

        const heap = new MinPriorityQueue((x) => x[1]);
        for(const [key, count] of Object.entries(countObj)) {
            heap.enqueue([key, count]);
            if(heap.size() > k) heap.dequeue();
        }

        const result = [];
        for(let i=0; i<k; i++) {
            const [key, count] = heap.dequeue();
            result.push(key);
        }

        return result
    }
}
