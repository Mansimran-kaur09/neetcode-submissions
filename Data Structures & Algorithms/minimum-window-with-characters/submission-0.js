class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = new Map();

        for (const char of t) {
            tCount[char] = (tCount[char] || 0) + 1;
        }

        let res = [-1, -1];
        let resLen = Infinity;
        for (let i = 0; i < s.length; i++) {
            const sCount = new Map();
            for (let r = i; r < s.length; r++) {
                sCount[s[r]] = (sCount[s[r]] || 0) + 1;

                let flag = true;
                for (const c in tCount) {
                    if ((sCount[c] || 0) < tCount[c]) {
                        flag = false;
                        break;
                    }
                }

                if (flag && r - i + 1 < resLen) {
                    resLen = r - i + 1;
                    res = [i, r];
                }
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
