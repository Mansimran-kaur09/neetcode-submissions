class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const result: number[] = [];
        let cnt1: number = 0,
            cnt2: number = 0;
        let num1: number = -1,
            num2: number = -1;

        for(const num of nums) {
            if(num === num1) cnt1++
            else if(num === num2) cnt2++;
            else if(cnt1 === 0) {
                cnt1 = 1;
                num1 = num
            } else if(cnt2 === 0) {
                cnt2 = 1;
                num2 = num
            } else {
                cnt1--;
                cnt2--;
            }
        }

        let maxCount: number = Math.floor(nums.length / 3)
        cnt1 = cnt2 = 0;
        for(const num of nums) {
            if(num === num1) cnt1++;
            if(num === num2) cnt2++;
        }

        if(cnt1 > maxCount) result.push(num1);
        if(cnt2 > maxCount) result.push(num2);

        return result;
    }
}
