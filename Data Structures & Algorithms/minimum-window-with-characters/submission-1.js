class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = new Map();
        for (const c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }

        let resLen = Infinity;
        let res = [-1, -1];
        for (let i = 0; i < s.length; i++) {
            const sCount = new Map();
            for (let j = i; j < s.length; j++) {
                sCount[s[j]] = (sCount[s[j]] || 0) + 1;

                let flag = true;
                for (const c in tCount) {
                    if ((sCount[c] || 0) < tCount[c]) {
                        flag = false;
                        break;
                    }
                }

                if (flag && j - i + 1 < resLen) {
                    resLen = j - i + 1;
                    res = [i, j];
                }
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
