class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = {};
        for (const c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }

        let have = 0,
            need = Object.keys(tCount).length;
        let l = 0;
        let resLen = Infinity;
        let res = [-1, -1];
        let window = {};
        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;
            if (tCount[c] && tCount[c] === window[c]) have++;

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;
                if (tCount[s[l]] && window[s[l]] < tCount[s[l]]) have--;
                l++;
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
