class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 0) return 0 
        if (n <= 2) return n;

        let first = 1;
        let second = 2;

        for (let i = 3; i <= n; i++) {
            let temp = first + second;
            first = second;
            second = temp;
        }
        return second;
    }
}
