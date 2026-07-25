class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const m = s.length;
        const n = t.length;

        if(m !== n) return false;
        const sChar = {}
        const tChar = {}

        for(let i = 0; i < m; i++) {
            sChar[s[i]] = (sChar[s[i]] || 0) + 1
            tChar[t[i]] = (tChar[t[i]] || 0) + 1
        }

        for(const key in sChar) {
            if(sChar[key] !== tChar[key]) {
                return false
            }
        }

        return true
    }
}
