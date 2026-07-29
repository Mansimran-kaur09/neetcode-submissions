class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const map = new Map<number, number>();
        const min: number = Math.min(...nums);
        const max: number = Math.max(...nums);

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        console.log(map, "map");

        let index: number = 0;
        for (let i = min; i <= max; i++) {
            if(map.has(i)) {
                let value = map.get(i);

                while(value > 0) {
                    nums[index] = i;
                    value--;
                    index++;
                }
            }
        }
    }
}
