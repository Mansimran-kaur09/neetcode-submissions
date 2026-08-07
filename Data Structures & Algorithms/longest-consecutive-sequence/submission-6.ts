class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let max: number = 0;
        const set: Set<number> = new Set(nums);

        for(let i=0; i<nums.length; i++) {
            const num = nums[i];

            if(!set.has(num-1) || !set.has(num+1)) {
                let curr: number = num;
                let count: number = 0;

                while(set.has(curr)) {
                    curr++;
                    count++;
                }
                max = Math.max(max, count)
            }
        }
        return max;
    }
}
