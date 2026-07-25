class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const n = nums.length;
        if(n === 1) return nums[0];
        const major = Math.floor(n/2);
        
        const countMap = new Map();

        for(let i=0; i<n; i++) {
            const current = nums[i];
            console.log(current, "current")
            console.log(countMap, "countMap")
            if(countMap.has(current)) {
                let value = countMap.get(current);
                value += 1;
                console.log(value, "value")
                if(value > major) return current;
                countMap.set(current, value)
            } else countMap.set(current, 1)
        }
        return -1
    }
}
