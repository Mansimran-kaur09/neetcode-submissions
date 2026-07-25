class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        let max = 0;
        let count = 0;

        for(const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
            if(map.get(num) > count) {
                max = num;
                count = map.get(num);
            }
        }


        return max
    }
}
