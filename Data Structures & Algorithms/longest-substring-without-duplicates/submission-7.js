class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0,
            maxCount = 0;
        const charMap = new Map();

        for (let r = 0; r < s.length; r++) {
            if (charMap.has(s[r])) {
                left = Math.max(charMap.get(s[r]) + 1, left);
            }
            charMap.set(s[r], r);
            maxCount = Math.max(maxCount, r - left + 1);
        }
        return maxCount
    }
}
