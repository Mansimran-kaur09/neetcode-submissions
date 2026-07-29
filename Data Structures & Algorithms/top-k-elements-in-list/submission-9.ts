class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const result: number[] = [];
        const map = new Map<number, number>();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        // console.log(map, "map")

        const bucket = [];

        for (const [key, value] of map) {
            bucket[value] = (bucket[value] || new Set()).add(key);
        }
        console.log(bucket, "bucket");

        const len = bucket.length;

        for (let i = len - 1; i >= 0; i--) {
            if(bucket[i]) {
                result.push(...bucket[i]);
            }
            if(result.length === k) break;
        }

        return result;
    }
}
