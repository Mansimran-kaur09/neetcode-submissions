class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const map = new Map<number, number>();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        let index: number = 0;
        for (let i = 0; i < 3; i++) {
            let value = map.get(i);

            while (value > 0) {
                nums[index++] = i;
                value--;
            }
        }
    }
}
