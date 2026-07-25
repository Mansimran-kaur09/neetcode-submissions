class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const count = new Map();
       
        let maxf = 0;
        let l = 0;
        for (let j = 0; j < s.length; j++) {

            
            count.set(s[j], (count.get(s[j]) || 0) + 1);

            maxf = Math.max(maxf, count.get(s[j]));

            while (j - l + 1 - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1)
                l++;
            }

            res = Math.max(res, j - l + 1);
        }

        return res;
    }
}
