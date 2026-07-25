class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        let charMap = {};
        let maxCount = 0;

        let left = 0;
        for (let i = 0; i < s.length; i++) {
            const current = s[i]
            charMap[current] = (charMap[current] || 0) + 1;
            while (charMap[current] > 1) {
                charMap[s[left]] -= 1;
                left++;
            }
            maxCount = Math.max(maxCount, i - left + 1);
        }
        return maxCount;
    }
}
