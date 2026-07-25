class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            const map = new Map();
            let maxF = 0;
            for (let j = i; j < s.length; j++) {
                map.set(s[j], (map.get(s[j]) || 0) + 1);

                maxF = Math.max(maxF, map.get(s[j]));
                if (j - i + 1 - maxF <= k) {
                    result = Math.max(result, j - i + 1);
                }
            }
        }
        return result
    }
}
