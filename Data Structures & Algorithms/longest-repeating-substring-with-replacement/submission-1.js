class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const set = new Set(s);

        for (let c of set) {
            let count = 0;
            let l = 0;

            for (let j = 0; j < s.length; j++) {
                if (s[j] === c) count++;

                while (j - l + 1 - count > k) {
                    if (s[l] === c) count--;
                    l++;
                }

                res = Math.max(res, j - l + 1);
            }
        }

        return res;
    }
}
