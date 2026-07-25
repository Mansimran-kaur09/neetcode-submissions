class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let m = s.length;
        let n = t.length;

        if(m !== n) return false;

        const sChar = new Map()
        const tChar = new Map()

        for(let i = 0; i<m; i++) {
            sChar.set(s[i], (sChar.get(s[i]) || 0) + 1)
            tChar.set(t[i], (tChar.get(t[i]) || 0) + 1)
        }

        for(let [key, value] of sChar) {
            console.log(key, "key")
            console.log(value, "value")
            if(sChar.get(key) !== tChar.get(key)) return false;
        }
        return true;
    }
}
