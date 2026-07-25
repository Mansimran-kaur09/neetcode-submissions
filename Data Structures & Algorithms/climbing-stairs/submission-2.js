class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let uniqueSteps = [];
        let i;

        for(i = 1; i<=3; i++) {
            uniqueSteps[i] = i
        }

        while (i <= n) {
            uniqueSteps[i] =  uniqueSteps[i-1] + uniqueSteps[i-2];
            i++;
        }

        return uniqueSteps[n];
    }
}
